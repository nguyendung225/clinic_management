import { ReactNode } from "react";
import { ColumnInstance } from "react-table";
type Props<T extends object> = {
  column: ColumnInstance<T>;
  shouldOpenFilterSearch: boolean;
  handleSearchByPage: (() => {}) | undefined;
  handleChangeValueInput:
    | ((event: React.ChangeEvent<HTMLInputElement>) => {})
    | undefined;
};

const TableCustomHeaderColumn = <T extends object>({
  column,
  shouldOpenFilterSearch,
  handleSearchByPage,
  handleChangeValueInput,
}: Props<T>) => {
  return column.id === "selection" ? (
    <>{column.render("Header") as ReactNode}</>
  ) : (
    <th className="p-0">
      <div className="table-header">
        <div>{column.render("Header") as ReactNode}</div>
        {shouldOpenFilterSearch && (
          <div className="px-2 pb-2 w-100">
            <input
              onChange={(event) => {
                if (handleChangeValueInput) handleChangeValueInput(event);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" && handleSearchByPage) {
                  handleSearchByPage();
                }
              }}
              name={column.id}
              type={"text"}
              className="form-control customs-input"
            />
          </div>
        )}
      </div>
    </th>
  );
};

export { TableCustomHeaderColumn };
