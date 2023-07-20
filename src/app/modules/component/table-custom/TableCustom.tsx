import { Row, useTable, useRowSelect } from "react-table";
import { KTCardBody } from "../../../../_metronic/helpers";
import { Column } from "react-table";
import { useIntl } from "react-intl";
import { TableCustomToolbar } from "./columns/TableToolbar";
import { ReactNode, useEffect, useState } from "react";
import PaginationCustom from "./columns/Pagination";
import clsx from "clsx";

import { TableCustomHeaderColumn } from "./columns/TableCustomHeaderColumn";
import { CheckboxColumn } from "./columns/CheckboxColumn";

interface tableProps<T extends object> {
  data: T[];
  columns: ReadonlyArray<Column<T>>;
  compact: boolean;
  handleSearchByPage?: (() => {}) ;
  handleChangeValueInput?: ((event: React.ChangeEvent<HTMLInputElement>) => {});
  handleOpenInfoDialog?: (row:any) => void;
  isReceptionList?: boolean;
  minHeight?: number;
  maxHeight?: number;
}

function TableCustom<T extends object>(props: tableProps<T>) {
  const {
    data,
    columns,
    handleSearchByPage,
    handleChangeValueInput,
    compact,
    handleOpenInfoDialog,
    isReceptionList,
    minHeight,
    maxHeight,
  } = props;
  const [selectedRows, setSelectedRows] = useState<Row<T>[]>([]);
  const [shouldOpenFilterSearch, setShouldOpenFilterSearch] = useState<boolean>(false);
  const [styles, setStyles] = useState<object>({});
  const intl = useIntl();

  useEffect(() => {
    setStyles({
      ...styles,
      minHeight: minHeight,
      maxHeight: maxHeight,
    })
  }, [minHeight, maxHeight]);

  const toggleAllRowsSelected = () => {
    const allRowsSelected = rows.every((row: any) => row.isSelected);
    setSelectedRows(allRowsSelected ? [] : rows);
  };

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, allColumns, rows } = useTable(
    {
      columns,
      data: data,
    },
    useRowSelect,
    (hooks) => {
      if (!compact)
        hooks.allColumns.push((columns) => [
          CheckboxColumn({ toggleAllRowsSelected, }),
          ...columns,
        ]);
    }
  );

  const toggleRowSelection = (row: any) => {
    row.toggleRowSelected();
    const isSelected = row.isSelected;
    if (!isSelected) {
      setSelectedRows([...selectedRows, row]);
    } else {
      setSelectedRows(selectedRows.filter((selectedRow: Row<T>) => selectedRow.id !== row.id));
    }
  };
  const handleUnSelectedRows = () => {
    rows.map((row: any) => {
      if (row.isSelected) row.toggleRowSelected();
    });
    setSelectedRows([]);
  };
  return (
    <KTCardBody>
      {!compact && (
        <TableCustomToolbar
          isReceptionList={isReceptionList}
          handleUnSelectedRows={handleUnSelectedRows}
          selectedRows={selectedRows}
          allColumns={allColumns}
          setShouldOpenFilterSearch={setShouldOpenFilterSearch}
          shouldOpenFilterSearch={shouldOpenFilterSearch}
        />
      )}
      <div className="table-responsive" style={styles} >
        <table
          id="kt_table_users"
          className="table align-middle table-row-dashed fs-6 dataTable no-footer overflow-hidden "
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className="text-muted fw-bolder fs-7 text-uppercase gs-0 border bg-pri"
              >
                {headerGroup.headers.map((column) => (
                  <TableCustomHeaderColumn<T>
                    handleChangeValueInput={handleChangeValueInput}
                    handleSearchByPage={handleSearchByPage}
                    key={column.id}
                    column={column}
                    shouldOpenFilterSearch={shouldOpenFilterSearch}
                  />
                ))}
              </tr>
            ))}
          </thead>

          <tbody className="text-gray-600 bg-white border " {...getTableBodyProps()}>
            {rows.length > 0 ? (
              rows.map((row: any, i) => {
                prepareRow(row);
                return (
                  <tr
                    className={clsx({
                      "selected-row": row.isSelected,
                    })}
                    {...row.getRowProps()}
                    onClick={() => {
                      !isReceptionList && toggleRowSelection(row);
                    }}
                  >
                    {row.cells.map((cell: any, index: number) => {
                      return (
                        <td
                          className="cell-custom"
                          onClick={() => {
                            if (index === 2 && handleOpenInfoDialog) handleOpenInfoDialog(row);
                          }}
                          {...cell.getCellProps()}
                        >
                          {cell.render("Cell") as ReactNode}
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={10}>
                  <div className="d-flex text-center w-100 align-content-center justify-content-center">
                    {intl.formatMessage({ id: "TABLE.DATA.EMPTY" })}
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {!compact && <PaginationCustom />}
    </KTCardBody>
  );
}

export { TableCustom };
