import { Column } from "react-table";
import { TableCustomHeader } from "../../../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../../../component/table/components/TableCustomCell";
import { IDSBenhNhan } from "../../../models/DanhSachBenhNhanModel";

export const columnDSBanhNhan: ReadonlyArray<Column<IDSBenhNhan>> = [
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"mã bn"}
        className="col-1 text-center text-white px-3 min-w-85px"
      />
    ),
    id: "maBN",
    Cell: ({ ...props }) => (
      <TableCustomCell className="p-1 text-center" data={props.row.original?.maBN} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"tên bn"}
        className="col-1 text-center text-white px-3 min-w-130px"
      />
    ),
    id: "tenBN",
    Cell: ({ ...props }) => (
      <TableCustomCell className="p-1" data={props.row.original?.tenBN} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"số bhyt"}
        className="col-1 text-center text-white px-3 min-w-125px"
      />
    ),
    id: "soBHYT",
    Cell: ({ ...props }) => (
      <TableCustomCell className="p-1" data={props.row.original?.soBHYT} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Giới tính"}
        className="col-1 text-center text-white px-3 min-w-90px"
      />
    ),
    id: "gioiTinh",
    Cell: ({ ...props }) => (
      <TableCustomCell className="p-1 text-center text-center" data={props.row.original?.gioiTinh} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"tuổi"}
        className="col-1 text-center text-white px-3 min-w-50px"
      />
    ),
    id: "tuoi",
    Cell: ({ ...props }) => (
      <TableCustomCell className="p-1 text-center text-center" data={props.row.original?.tuoi} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"khoa điều trị"}
        className="col-1 text-center text-white px-3 min-w-125px"
      />
    ),
    id: "khoaDieuTri",
    Cell: ({ ...props }) => (
      <TableCustomCell className="p-1" data={props.row.original?.khoaDieuTri} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"phòng điều trị"}
        className="col-1 text-center text-white px-3 min-w-125px"
      />
    ),
    id: "phongDieuTri",
    Cell: ({ ...props }) => (
      <TableCustomCell className="p-1" data={props.row.original?.phongDieuTri} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"giường"}
        className="col-1 text-center text-white px-3 min-w-100px"
      />
    ),
    id: "giuong",
    Cell: ({ ...props }) => (
      <TableCustomCell className="p-1" data={props.row.original?.giuong} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"bác sĩ điều trị"}
        className="col-1 text-center text-white px-3 min-w-125px"
      />
    ),
    id: "bacSiDieuTri",
    Cell: ({ ...props }) => (
      <TableCustomCell className="p-1" data={props.row.original?.bacSiDieuTri} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"bắt đầu bhyt"}
        className="col-1 text-center text-white px-3 min-w-125px"
      />
    ),
    id: "batDauBHYT",
    Cell: ({ ...props }) => (
      <TableCustomCell className="p-1 text-center" data={props.row.original?.batDauBHYT} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"kết thúc bhyt"}
        className="col-1 text-center text-white px-3 min-w-130px"
      />
    ),
    id: "ketThucBHYT",
    Cell: ({ ...props }) => (
      <TableCustomCell className="p-1 text-center" data={props.row.original?.ketThucBHYT} />
    ),
  },
]