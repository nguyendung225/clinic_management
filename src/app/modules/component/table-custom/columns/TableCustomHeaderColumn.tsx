import { ReactNode } from "react";
import { ColumnInstance } from "react-table";
type Props<T extends object> = {
  column: ColumnInstance<T>;
  shouldOpenFilterSearch: boolean;
  handleSearchByPage: (() => {}) | undefined;
  handleChangeValueInput: ((event: React.ChangeEvent<HTMLInputElement>) => {}) | undefined;
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
    <th className="spaces p-10 text-middle">
      <div className="table-header">
        <div>{column.render("Header") as ReactNode}</div>
        {shouldOpenFilterSearch && (
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
            type={column.id === "birthdate" ? "date" : "text"}
            className="form-control form-control-sm "
          />
        )}
      </div>
    </th>
  );
};

export { TableCustomHeaderColumn };
