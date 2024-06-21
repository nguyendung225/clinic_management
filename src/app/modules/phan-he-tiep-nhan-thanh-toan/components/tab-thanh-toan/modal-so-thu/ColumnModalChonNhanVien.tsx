import { Column } from "react-table";
import { IDsNhanVien } from "../../../models/SoThuModel";
import { TableCustomHeader } from "../../../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../../../component/table/components/TableCustomCell";

export const columnDsNhanVien: ReadonlyArray<Column<IDsNhanVien>> = [
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Mã nhân viên"}
        className="min-w-125px text-center p-2 border-x"
      />
    ),
    id: "maNV",
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props.row.original?.maNV}
        className="p-2 border spaces py-4 h-100"
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Tên nhân viên"}
        className="min-w-150px text-center p-2 border-x"
      />
    ),
    id: "tenNV",
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props.row.original?.tenNV}
        className="p-2 border spaces py-4 h-100"
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Khoa"}
        className="min-w-150px text-center p-2 border-x"
      />
    ),
    id: "khoa",
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props.row.original?.khoa}
        className="p-2 border spaces py-4 h-100"
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Module"}
        className="min-w-150px text-center p-2 border-x"
      />
    ),
    id: "module",
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props.row.original?.module}
        className="p-2 border spaces py-4 h-100"
      />
    ),
  },
]