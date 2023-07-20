import { Column } from "react-table";
import { TableCustomCell } from "../../../component/table-custom-v2/columns/TableCustomCell";
import { TableCustomHeader } from "../../../component/table-custom-v2/columns/TableCustomHeader";
import { DichVuDaChiDinh } from "../../models/DichVuDaChiDinhModel";

export const DichVuDaChiDinhColumns: ReadonlyArray<Column<DichVuDaChiDinh>> = [
  {
    Header: (props) => (
      <TableCustomHeader<DichVuDaChiDinh>
        tableProps={props}
        title={"STT"}
        className="text-center text-light min-w-20px"
      />
    ),
    id: "INDEX",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="text-center ps-3"
        data={(props.row.index + 1).toString()}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DichVuDaChiDinh>
        tableProps={props}
        title={"Loại dịch vụ"}
        className="text-center text-light min-w-150px"
      />
    ),
    id: "loaiDV",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="text-center"
        data={props.data[props.row.index].loaiDV}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DichVuDaChiDinh>
        tableProps={props}
        title={"Mã dịch vụ"}
        className="text-center text-light min-w-150px"
      />
    ),
    id: "maDV",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="text-center"
        data={props.data[props.row.index].maDV}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DichVuDaChiDinh>
        tableProps={props}
        title={"Tên dịch vụ"}
        className="text-center text-light min-w-250px"
      />
    ),
    id: "tenDV",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="text-start"
        data={props.data[props.row.index].tenDV}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DichVuDaChiDinh>
        tableProps={props}
        title={"TG chỉ định"}
        className="text-center text-light min-w-150px"
      />
    ),
    id: "tgChiDinh",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="text-center"
        data={props.data[props.row.index].tgChiDinh}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DichVuDaChiDinh>
        tableProps={props}
        title={"Trạng thái"}
        className="text-center text-light min-w-150px"
      />
    ),
    id: "trangThai",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="text-center"
        data={props.data[props.row.index].trangThai}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DichVuDaChiDinh>
        tableProps={props}
        title={"Thao tác"}
        className="text-center text-light min-w-100px"
      />
    ),
    id: "thaoTac",
    Cell: ({ ...props }) => (
      <div className="text-center text-system pe-3">In</div>
    ),
  },
];
