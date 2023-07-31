import React, { CSSProperties, FC, useEffect, useState } from "react";
import clsx from "clsx";
import { TableRow } from "./TableCollapseRow";

export interface TableProps {
  data: any[];
  columns: columnNamesType[];
  headerClasses?: string;
  bodyClasses?: string;
  name?: string;
  height?: number;
  scrollable?: boolean;
}

export interface columnNamesType {
  name: string;
  field: string;
  sorting?: boolean,
  headerStyle?: CSSProperties;
  cellStyle?: object;
  render?: (data: any, index: number) => any;
}

const TableCustom: FC<TableProps> = (props) => {
  const { data,
    columns,
    headerClasses,
    bodyClasses,
    height,
    scrollable,

  } = props;

  const [itemList, setItemList] = useState<any>([]);

  useEffect(() => {
    setItemList(data)
  }, [data]);

  const styles: object = {
    height: height,
    overflowY: scrollable && 'auto',
  }

  return (
    <div
      className="table-responsive customs-collapse-row m-0"
      style={styles}
    >
      <table className="table-row-dashed dataTable table w-100">
        <thead className={clsx(headerClasses, "position-sticky top-0 z-index-1")}>
          <tr className="text-white fw-bolder fs-7 text-uppercase gs-0 border border-secondary bg-pri ">
            {columns?.map((column: columnNamesType) =>
              <th
                className={clsx(
                  "text-center",
                  !column?.headerStyle && "min-w-40px",
                )}
                style={column?.headerStyle}
              >
                {column.name}
              </th>
            )}
          </tr>
        </thead>
        <tbody className={clsx(bodyClasses)} >
          {itemList?.length > 0 && itemList?.map((row: any, index: number | undefined) => (
            <TableRow
              row={row}
              index={index}
              columns={columns}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCustom;
