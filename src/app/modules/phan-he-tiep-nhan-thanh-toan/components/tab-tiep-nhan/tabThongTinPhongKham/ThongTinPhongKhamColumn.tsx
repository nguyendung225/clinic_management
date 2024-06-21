import { Column } from "react-table";
import { IPhongKham } from "../../../models/PhongKhamModel";
import { TableCustomHeader } from "../../../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../../../component/table/components/TableCustomCell";

export const columnsThongTinPhongKham: ReadonlyArray<Column<IPhongKham>> = [
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Tên phòng khám"}
        className="col-1 text-center text-white min-w-225px"
      />
    ),
    id: "ten",
    Cell: ({ ...props }) => (
      <TableCustomCell className="p-1" data={props.row.original?.ten} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"ĐK"}
        className="col-1 text-center text-white"
      />
    ),
    id: "dangKy",
    Cell: ({ ...props }) => (
      <TableCustomCell className="text-center" data={props.row.original?.dangKy} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Chờ"}
        className="col-1 text-center text-white"
      />
    ),
    id: "cho",
    Cell: ({ ...props }) => (
      <TableCustomCell className="text-center" data={props.row.original?.cho} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Khám"}
        className="col-1 text-center text-white"
      />
    ),
    id: "kham",
    Cell: ({ ...props }) => (
      <TableCustomCell className="text-center" data={props.row.original?.kham} />
    ),
  },
]