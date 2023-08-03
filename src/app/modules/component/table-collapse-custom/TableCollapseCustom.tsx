import React, { BaseSyntheticEvent, CSSProperties, ChangeEvent, FC, useContext, useEffect, useState } from "react";
import clsx from "clsx";
import { TableRow } from "./TableCollapseRow";
import { CustomElementbyTagName } from "./CustomElementbyTagName";
import { KEY } from "../../utils/Constant";
import { removeDiacritics } from "../../utils/FormatUtils";
import { AppContext } from "../../appContext/AppContext";

export interface TableProps {
  data: any[];
  columnNameList: columnNamesType[];
  headerClasses?: string;
  bodyClasses?: string;
  name?: string;
  height?: number;
  scrollable?: boolean;
  nameChildren: string;
  titleComponent?: string;
  setData: (data: any) => void;
  selectData: (data: any) => void;
  setSearchObject: (data: any) => void;
}

export interface columnNamesType {
  name: string;
  field: string;
  sorting?: boolean,
  headerCellProps?: CSSProperties;
  bodyCellProps?: object;
}

const CustomTable: FC<TableProps> = (props) => {
  const { data,
    nameChildren,
    headerClasses,
    bodyClasses,
    columnNameList,
    height,
    scrollable,
    setData
  } = props;

  const [itemList, setItemList] = useState<any>([]);
  const [searchObject, setSearchObject] = useState<object>({});

  const handleCheckBox = (event: ChangeEvent<HTMLInputElement>, item: any) => {
    const { checked } = event.target;
    const updatedData = updateCheckedStatus(data, item, checked);
    const updatedItem = updateCheckedStatus(itemList, item, checked);

    setData(updatedData);
    setItemList(updatedItem);

    const checkedItems = getCheckedItems(updatedData);
    props?.selectData(checkedItems)
  };

  const updateCheckedStatus = (
    data: any[],
    currentItem: any,
    isChecked: boolean
  ): any[] => {
    return data.map((item) => {
      if (item?.id === currentItem?.id) {
        let items = updateChildren(item, isChecked)
        return { ...items, isChecked };
      } else if (item?.[nameChildren] && item?.[nameChildren].length > 0) {
        return {
          ...item,
          [nameChildren]: updateCheckedStatus(item?.[nameChildren], currentItem, isChecked),
        };
      }
      return item;
    });
  };

  const updateChildren = (items: any, isChecked: boolean) => {
    if (items?.[nameChildren]?.length > 0) {
      items?.[nameChildren]?.forEach((item: any) => {
        item.isChecked = isChecked
        updateChildren(item, isChecked)
      });
    }
    return items;
  }

  const getCheckedItems = (data: any[]): any[] => {
    let checkedItems: any[] = [];
    data.forEach((item: any) => traverse(item, checkedItems));
    return checkedItems;
  };

  const traverse = (item: any, checkedItems: any[]) => {
    if (item.isChecked) {
      checkedItems.push(item);
    }

    if (item?.[nameChildren] && item?.[nameChildren].length > 0) {
      item?.[nameChildren].forEach((child: any) => traverse(child, checkedItems));
    }
  };

  const styles: object = {
    height: height,
    overflowY: scrollable && 'auto',
  }

  useEffect(() => {
    if (!checkSearch()) {
      setItemList(data)
    }
  }, [data]);

  const search = () => {
    if (!checkSearch()) {
      setItemList(data);
      return false;
    }

    const filteredData = data.map((item: any) => {
      if (item?.[nameChildren] && item?.[nameChildren].length > 0) {
        const filteredServices = item?.[nameChildren].filter((service: any) => {
          for (const [key, value] of Object.entries(searchObject)) {
            const lowerCaseString = removeDiacritics(service[key]?.toLowerCase());
            const lowerCaseSearchString = removeDiacritics(value?.toLowerCase().trim());
            if (lowerCaseSearchString && !lowerCaseString?.includes(lowerCaseSearchString)) {
              return false;
            }
          }
          return true;
        });

        const newItem = listItemService(item);
        newItem[nameChildren] = filteredServices;
        return newItem;
      }
      return item;
    });

    setItemList(filteredData);
  };

  const listItemService = (item: any) => {
    const newItem = { ...item };
    if (newItem?.[nameChildren]) {
      newItem[nameChildren] = newItem?.[nameChildren].map((service: any) => listItemService(service));
    }
    return newItem;
  };

  const handleChange = (event: BaseSyntheticEvent) => {
    setSearchObject({ ...searchObject, [event?.target?.name]: event?.target?.value })
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (KEY.ENTER === event.key) {
      search()
      props?.setSearchObject(searchObject)
    }
  }

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    !value && search();
    !value && props?.setSearchObject(searchObject)
  }

  const checkSearch = () => {
    let check = Object.values(searchObject)?.some((value: any) => value);
    return check
  }

  return (
    <div
      className="table-responsive customs-collapse-row m-0"
      style={styles}
    >
      <table className="table-row-dashed dataTable table w-100">
        <thead className={clsx(headerClasses, "position-sticky top-0 z-index-1")}>
          <tr className="text-white fw-bolder fs-7 text-uppercase gs-0 border border-secondary bg-pri ">
            <th className="cell-action"></th>
            {columnNameList?.length > 0 && columnNameList?.map((column: columnNamesType) =>
              <th
                className={clsx(
                  "text-center",
                  !column?.headerCellProps && "min-w-40px",
                )}
                style={column?.headerCellProps}
              >
                {column.name}
              </th>
            )}
          </tr>
        </thead>
        <tbody className={clsx(bodyClasses)} >
          <tr>
            <td className="cell-action"></td>
            {columnNameList?.length > 0 && columnNameList?.map((column: columnNamesType) =>
              <td className="spaces px-8">
                {
                  column?.sorting && <input
                    className="w-100 customs-input form-control"
                    type="text"
                    name={column?.field}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    onKeyUp={handleKeyUp}
                  />
                }
              </td>
            )}
          </tr>
          {itemList?.length > 0 && itemList?.map((row: any, index: number | undefined) => (
            <TableRow
              row={row}
              index={index}
              nameChildren={nameChildren}
              columnNameList={columnNameList}
              handleCheckBox={handleCheckBox}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TableCollapseCustom: FC<TableProps> = (props) => {
  const { name, titleComponent, ...rest } = props;
  const titleComponentType = (titleComponent ? titleComponent : "h1") as keyof JSX.IntrinsicElements
  return (
    <div>
      {name && <CustomElementbyTagName tagName={titleComponentType} content={name} />}
      <CustomTable {...rest} />
    </div>
  );
};

export default TableCollapseCustom;
