import React, { FC, useState } from "react";
import clsx from "clsx";
import { columnNamesType } from "./TableCollapseCustom";


export interface TableRowProps {
  row: any;
  columnNameList: columnNamesType[];
  isCollapsed?: boolean;
  isParent?: boolean;
  toggleCollapse?: () => void;
}

export const TableRow: FC<TableRowProps> = (props) => {
  const { row, columnNameList } = props;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isParent = row.children && row.children?.length > 0;

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {row.title && <tr
        className={clsx("bg-secondary row-title position-sticky start-0", isParent ? "cursor-pointer" : "")}
        onClick={toggleCollapse}
      >
        <td
          colSpan={1}
          className={clsx(
            "cell-action position-sticky start-0",
            isCollapsed && "chevron-rotate-down"
          )} onClick={toggleCollapse}
          // style={{ position: "sticky", left: 0 }}
        >
          <span className="">
            {(isParent) &&  <i className="fs-5 bi bi-chevron-compact-right"/>}
          </span>
        </td>
        <td colSpan={columnNameList?.length}>
          <span className="position-sticky spaces left-38px">
            {row.title}
          </span>
        </td>
      </tr>}

      {!row.title && <tr
        className={clsx(
          "custom-children",
          isParent && "cursor-pointer bg-hover-light-secondary border-light",
          (isParent && isCollapsed) && "row-parent bg-light-secondary",
        )}
        onClick={toggleCollapse}
      >
        <td className={clsx(
          "cell-action",
          isCollapsed && "chevron-rotate-down"
        )} onClick={toggleCollapse}>
          {(isParent) &&  <i className="fs-5 bi bi-chevron-compact-right"/>}
        </td>
        {columnNameList?.map((column, index) =>
          <td key={index} style={column?.bodyCellProps}>{row[column?.field]}</td>
        )}
      </tr>}
      {isCollapsed && row.children &&
        row.children.map((child: any) => (
          <TableRowChildren
            columnNameList={columnNameList}
            key={child.maDV}
            row={child}
          />
        ))}
    </>
  );
};

const TableRowChildren: FC<TableRowProps> = (props) => {
  const { row, columnNameList, } = props;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isParent = row.children && row.children?.length > 0;

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return(
    <>
      {!row.title && <tr
        className={clsx(
          "custom-children",
          isParent && "cursor-pointer bg-hover-light-secondary border-light",
          (isParent && isCollapsed) && "row-parent bg-light-secondary",
        )}
        onClick={toggleCollapse}
      >

        <td
          className={clsx(
            "cell-action",
            isCollapsed && "chevron-rotate-down"
          )}
          onClick={toggleCollapse}
        >
          {(isParent) &&  <i className="fs-5 bi bi-chevron-compact-right"/>}
        </td>
        {columnNameList?.map((column, index) =>
          <td key={index} style={column?.bodyCellProps}>{row[column.field]}</td>
        )}
      </tr>}
      {isCollapsed && row.children &&
        row.children.map((child: any) => (
          <TableRow
            key={child.maDV}
            row={child}
            columnNameList={columnNameList}
          />
        ))}
    </>
  )
}