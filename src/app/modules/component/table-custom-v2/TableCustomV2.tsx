import { Row, useTable, useRowSelect } from "react-table";
import { KTCardBody } from "../../../../_metronic/helpers";
import { Column } from "react-table";
import { useIntl } from "react-intl";
import { TableCustomToolbar } from "./columns/TableToolbar";
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import PaginationCustom from "./columns/Pagination";
import clsx from "clsx";

import { TableCustomHeaderColumn } from "./columns/TableCustomHeaderColumn";
import { SELECTION_MODE } from "../../utils/Constant";
import { Form } from "react-bootstrap";
interface tableProps<T extends object> {
  data: T[];
  columns: ReadonlyArray<Column<T>>;
  selectionMode?: typeof SELECTION_MODE[keyof typeof SELECTION_MODE]
  hasToolbar?: boolean;
  handleSearchByPage?: () => {};
  handleChangeValueInput?: (event: React.ChangeEvent<HTMLInputElement>) => {};
  handleOpenInfoDialog?: (row: any) => void;
  getSelectedRowsData?: Dispatch<SetStateAction<any>> | any;
  minHeight?: number;
  maxHeight?: number;
  selectedLabel?: boolean;
}

function TableCustomV2<T extends object>(props: tableProps<T>) {
  const {
    data,
    columns,
    handleSearchByPage,
    handleChangeValueInput,
    selectionMode,
    hasToolbar,
    getSelectedRowsData,
    minHeight,
    maxHeight,
    selectedLabel,
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

  useEffect(() => {
    if (getSelectedRowsData) {
      getSelectedRowsData(selectedRows.map((item) => item?.original));
    }
  }, [selectedRows]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    allColumns,
    rows,
  } = useTable(
    {
      columns,
      data: data,
    },
    useRowSelect,
    (hooks) => {
      if (selectionMode === SELECTION_MODE.MULTI){
        hooks.allColumns.push((columns) => [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }: any) => (
              <Form.Check
                type="checkbox"
                className="p-0 customs-form-check__table my-3"
                {...getToggleAllRowsSelectedProps()}
                onClick={(e) => {
                  toggleAllRowsSelected();
                }}
              />
            ),
            Cell: ({ row }: any) => (
              <Form.Check
                type="checkbox"
                className="ps-4 customs-form-check__table my-0 mt-1"
                {...row.getToggleRowSelectedProps()}
              />
            ),
          },
          ...columns,
        ]);
      }
      if (selectionMode === SELECTION_MODE.SINGLE){
        hooks.allColumns.push((columns) => [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }: any) => (
              <div></div>
            ),
            Cell: ({ row }: any) => (
              <Form.Check
                type="radio"
                className="ps-4 customs-form-check__radio__table my-0 mt-1"
                {...row.getToggleRowSelectedProps()}
              />
            ),
          },
          ...columns,
        ]);
      }
    }
  );

  const toggleRowSelection = (row: any) => {
    row.toggleRowSelected();
    const isSelected = row.isSelected;
    if (!isSelected) {
      setSelectedRows([...selectedRows, row]);
    } else {
      setSelectedRows(
        selectedRows.filter((selectedRow: Row<T>) => selectedRow.id !== row.id)
      );
    }
  };
  const toggleAllRowsSelected = () => {
    const allRowsSelected = rows.every((row: any) => row.isSelected);
    setSelectedRows(allRowsSelected ? [] : rows);
  };
  const handleUnSelectedRows = () => {
    rows.map((row: any) => {
      if (row.isSelected) row.toggleRowSelected();
    });
    setSelectedRows([]);
  };

  const handleSingleSelect = (selectedRow: any) => {
    if (selectedRow.isSelected) {
      handleUnSelectedRows();
    } else {
      handleUnSelectedRows();
      selectedRow.toggleRowSelected();
      setSelectedRows([selectedRow]);
    }
  };

  return (
    <KTCardBody>
      {hasToolbar && (
        <TableCustomToolbar
          selectedLabel={selectedLabel}
          handleUnSelectedRows={handleUnSelectedRows}
          selectedRows={selectedRows}
          allColumns={allColumns}
          setShouldOpenFilterSearch={setShouldOpenFilterSearch}
          shouldOpenFilterSearch={shouldOpenFilterSearch}
        />
      )}
      <div className="table-responsive" style={styles}>
        <table
          id="kt_table_users"
          className="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer overflow-hidden "
          {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className="text-muted fw-bolder fs-7 text-uppercase gs-0 border bg-pri border-y-none ">
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

          <tbody
            className="text-gray fw-bold bg-white border"
            {...getTableBodyProps()}>
            {rows.length > 0 ? (
              rows.map((row: any, i) => {
                prepareRow(row);
                return (
                  <tr
                    className={clsx(
                      " cursor-pointer",
                      { "selected-row": row.isSelected, }
                    )}
                    {...row.getRowProps()}
                    onClick={() => {
                      if(selectionMode === SELECTION_MODE.MULTI){
                        toggleRowSelection(row);
                      }
                      if(selectionMode === SELECTION_MODE.SINGLE){
                        handleSingleSelect(row)
                      }
                    }}>
                    {row.cells.map((cell: any, index: number) => {
                      return (
                        <td
                          className={'py-3'}
                          {...cell.getCellProps()}>
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
    </KTCardBody>
  );
}

export { TableCustomV2 };
