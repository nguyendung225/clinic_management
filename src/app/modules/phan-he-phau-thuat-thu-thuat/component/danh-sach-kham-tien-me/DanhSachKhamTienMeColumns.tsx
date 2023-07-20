import { Column } from "react-table";
import { DanhSachTiepNhanGayMeModel } from "../../model/DanhSachTiepNhanGayMeModel";
import { TableCustomHeader } from "../../../component/table-custom-v2/columns/TableCustomHeader";
import { TableCustomCell } from "../../../component/table-custom-v2/columns/TableCustomCell";

export const DanhSachKhamTienMeColumns: ReadonlyArray<Column<DanhSachTiepNhanGayMeModel>> = [
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachTiepNhanGayMeModel>
        tableProps={props}
        title={"STT"}
        className="text-center text-white align-middle bg-pri min-w-80px"
      />
    ),
    id: "stt",
    Cell: ({ ...props }) => (
      <TableCustomCell
        data={String(props.row.index + 1)}
        className="text-center ps-3"
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachTiepNhanGayMeModel>
        tableProps={props}
        title={"Trạng thái"}
        className="text-center text-white align-middle bg-pri min-w-150px"
      />
    ),
    id: "trangThai",
    Cell: ({ ...props }) => (
      <TableCustomCell
        data={props.data[props.row.index].status}
        className="text-center"
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachTiepNhanGayMeModel>
        tableProps={props}
        title={"Mã BA"}
        className="text-center text-white align-middle bg-pri min-w-100px"
      />
    ),
    id: "maBA",
    Cell: ({ ...props }) => (
      <TableCustomCell
        data={props.data[props.row.index].maBA || ''}
        className="text-center"
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachTiepNhanGayMeModel>
        tableProps={props}
        title={"Mã BN"}
        className="text-center text-white align-middle bg-pri min-w-100px"
      />
    ),
    id: "maBN",
    Cell: ({ ...props }) => (
      <TableCustomCell
        data={props.data[props.row.index].maBN || ''}
        className="text-center"
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachTiepNhanGayMeModel>
        tableProps={props}
        title={"Bác sĩ chỉ định"}
        className="text-center text-white align-middle bg-pri min-w-200px"
      />
    ),
    id: "bsChiDinh",
    Cell: ({ ...props }) => (
      <TableCustomCell
        data={props.data[props.row.index].bsChiDinh || ''}
        className="text-start"
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachTiepNhanGayMeModel>
        tableProps={props}
        title={"Khoa"}
        className="text-center text-white align-middle bg-pri min-w-200px"
      />
    ),
    id: "khoa",
    Cell: ({ ...props }) => (
      <TableCustomCell
        data={props.data[props.row.index].khoa || ''}
        className="text-start"
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachTiepNhanGayMeModel>
        tableProps={props}
        title={"Phòng chỉ định"}
        className="text-center text-white align-middle bg-pri min-w-200px"
      />
    ),
    id: "phongChiDinh",
    Cell: ({ ...props }) => (
      <TableCustomCell
        data={props.data[props.row.index].phongChiDinh || ''}
        className="text-start pe-3"
      />
    ),
  },
]

