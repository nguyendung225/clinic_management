import { Column } from "react-table";
import { TableCustomHeader } from "../../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../../component/table/components/TableCustomCell";

export const PhuMoColumns: ReadonlyArray<Column<any>> = [
  {
    Header: (props) => (
      <TableCustomHeader<any>
        tableProps={props}
        title={"STT"}
        className="text-center text-white align-middle bg-pri spaces W-40"
      />
    ),
    id: "STT",
    Cell: ({ ...props }) => (
      <TableCustomCell
        data={String(props.row.index + 1)}
        className="text-center ps-3"
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<any>
        tableProps={props}
        title={"Phụ mổ"}
        className="text-center text-white align-middle bg-pri min-w-150px"
      />
    ),
    id: "Phụ mổ",
    Cell: ({ ...props }) => (
      <TableCustomCell
        data={props.data[props.row.index].name}
        className="text-start pe-3"
      />
    ),
  },
];