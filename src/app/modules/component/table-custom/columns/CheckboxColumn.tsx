import { Column } from "react-table";


type CheckboxColumnProps<T extends object> = {
  toggleAllRowsSelected: () => void;
};

export const CheckboxColumn = <T extends object>( {toggleAllRowsSelected,}: CheckboxColumnProps<T>): Column<T> => {
  return {
    id: "selection",
    Header: ({ getToggleAllRowsSelectedProps }: any) => (
      <input
        type="checkbox"
        className="check-box-row"
        {...getToggleAllRowsSelectedProps()}
        onClick={() => {
          toggleAllRowsSelected();
        }}
      />
    ),
    Cell: ({ row }: any) => (
      <input
        type="checkbox"
        className="check-box-row"
        {...row.getToggleRowSelectedProps()}
      />
    ),
  };
};