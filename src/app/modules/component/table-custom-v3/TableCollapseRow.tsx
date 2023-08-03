import React, { FC } from "react";
import { columnNamesType } from "./TableCustom";


export interface TableRowProps {
  row: any;
  index?: number | undefined;
  columns: columnNamesType[];
  nameChildren?: string;
  sorting?: boolean;
}

export const TableRow: FC<TableRowProps> = (props) => {
  const { row, columns, index } = props;
  return (
    <>
      <tr>
        {columns?.map((column: any) => (
          column?.render ?
            <td
              className="td-vertical-center"
              style={column?.cellStyle}
            >
              {column.render ? column.render(row, index) : row[column?.field]}
            </td> : <td
              className="td-vertical-center"
              key={index}
              style={column?.cellStyle}
            >
              {row[column?.field]}
            </td>
        ))}
      </tr>
    </>
  );
};