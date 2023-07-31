import React, { ChangeEvent, FC, useState } from "react";
import clsx from "clsx";
import { columnNamesType } from "./TableCollapseCustom";
import { Form } from "react-bootstrap";


export interface TableRowProps {
  row: any;
  index?: number | undefined;
  columnNameList: columnNamesType[];
  isCollapsed?: boolean;
  nameChildren:string;
  sorting?: boolean;
  isParent?: boolean;
  toggleCollapse?: () => void;
  handleCheckBox: (event: ChangeEvent<HTMLInputElement>, data: any) => void;
}

export const TableRow: FC<TableRowProps> = (props) => {
  const { row, columnNameList, index, nameChildren } = props;
  const [isCollapsed, setIsCollapsed] = useState<boolean>(index === 0);
  const isParent = row?.[nameChildren] && row?.[nameChildren]?.length > 0;

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {/* Row name */}
      {row.name && isParent && <tr
        className={clsx("bg-secondary row-name position-sticky start-0", isParent ? "cursor-pointer" : "")}
        onClick={toggleCollapse}
      >
        <td
          colSpan={1}
          className={clsx(
            "cell-action position-sticky start-0 border-end-0",
            isCollapsed && "chevron-rotate-down"
          )}
          onClick={toggleCollapse}
        >
          <span className="">
            {(isParent) && <i className="fs-5 bi bi-chevron-compact-right" />}
          </span>
        </td>
        <td colSpan={columnNameList?.length}>
          <span className="position-sticky spaces left-38px">
            {row.name}
          </span>
        </td>
      </tr>}

      {/* Row content */}
      {!row.name && <tr
        className={clsx(
          "custom-[nameChildren]",
          isParent && "cursor-pointer bg-hover-light-secondary border-light",
          (isParent && isCollapsed) && "row-parent bg-light-secondary",
        )}
      >
        <td className={clsx(
          "cell-action",
          isCollapsed && "chevron-rotate-down",
        )}
        >
          <div className="flex">
            {isParent &&
              <i className="fs-5 bi bi-chevron-compact-right me-3" onClick={toggleCollapse} />
            }
            <Form.Check
              className="customs-form-check__table"
              // name={`row-${index}`}
              checked={row.isChecked}
              onChange={(event: ChangeEvent<HTMLInputElement>) => props?.handleCheckBox(event, row)}
            />
          </div>
        </td>
        {columnNameList?.map((column, index) =>
          <td
            key={index}
            style={column?.bodyCellProps}
            onClick={toggleCollapse}
          >
            {row[column?.field]}
          </td>
        )}
      </tr>}

      {/* Nếu có [nameChildren] thì tiếp tục map [nameChildren] */}
      {(isCollapsed && row?.[nameChildren] && row?.[nameChildren]?.length > 0) &&
        row?.[nameChildren].map((child: any, i: number) => (
          <TableRow
            nameChildren={nameChildren}
            columnNameList={columnNameList}
            row={child}
            index={index ? (index + i) : i}
            handleCheckBox={props?.handleCheckBox}
          />
        ))}
    </>
  );
};