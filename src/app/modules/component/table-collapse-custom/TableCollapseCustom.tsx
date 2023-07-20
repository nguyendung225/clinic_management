import { CSSProperties, FC, HTMLAttributes } from "react";
import clsx from "clsx";
import { TableRow } from "./TableCollapseRow";
import { CustomElementbyTagName } from "./CustomElementbyTagName";


export interface TableProps {
  data: any[];
  columnNameList: columnNamesType[];
  headerClasses?: string;
  bodyClasses?: string;
  title?: string;
  height?: number;
  scrollable?: boolean;
  titleComponent?: string;
}

export interface columnNamesType {
  name: string;
  field: string;
  headerCellProps?: CSSProperties;
  bodyCellProps?: object;
}



const CustomTable: FC<TableProps> = (props) => {
  const { data, headerClasses, bodyClasses, columnNameList, height, scrollable, } = props;

  const styles: object = {
    height: height,
    overflowY: scrollable &&  'auto',
  }

  return (
    <div
      className="table-responsive customs-collapse-row m-0"
      style={styles}
    >
      <table className="table-row-dashed dataTable table min-w-100">
        <thead className={clsx(headerClasses, "position-sticky top-0")}>
          <tr className="text-white fw-bolder fs-7 text-uppercase gs-0 border border-secondary bg-pri ">
            <th className="cell-action "></th>
            {columnNameList?.map((column: columnNamesType) => {
              console.log(column?.bodyCellProps);
                return <th
                  className={clsx("text-center", !column?.headerCellProps && "min-w-80px")}
                  style={column?.headerCellProps}
                >{column.name}</th>;
              }
            )}
          </tr>
        </thead>
        <tbody className={clsx(bodyClasses)} >
        {data.map((row) => (
          <TableRow
            key={row.maDV}
            row={row}
            columnNameList={columnNameList}
          />
        ))}
        </tbody>
      </table>
    </div>
  );
};

const TableCollapseCustom: FC<TableProps> = (props) => {
  const { title, titleComponent, ...rest } = props;

  const titleComponentType = (titleComponent ? titleComponent : "h1") as keyof JSX.IntrinsicElements

  return (
    <div>
      {title && <CustomElementbyTagName tagName={titleComponentType} content={title}/>}
      <CustomTable {...rest}/>
    </div>
  );
};

export default TableCollapseCustom;
