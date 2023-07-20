import { Column } from "react-table";
import { DanhSachBenhPhamInterface } from "../../models/DanhSachBenhPhamModels";
import { TableCustomHeader } from "../../../component/table-custom-v2/columns/TableCustomHeader";
import { TableCustomCell } from "../../../component/table-custom-v2/columns/TableCustomCell";

export const DanhSachBenhPhamColumns: ReadonlyArray<Column<DanhSachBenhPhamInterface>> = [
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachBenhPhamInterface>
        tableProps={props}
        title={"STT"}
        className="text-center text-white align-middle bg-pri"
      />
    ),
    id: "index",
    Cell: ({ ...props }) => (
      <TableCustomCell data={String(props.row.index + 1)} className="text-center ps-3"/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachBenhPhamInterface>
        tableProps={props}
        title={"Số gọi"}
        className="text-center text-white align-middle bg-pri min-w-80px"
      />
    ),
    id: "soGoi",
    Cell: ({ ...props }) => (
      <TableCustomCell data={String(props.data[props.row.index].soGoi)} className="text-center"/>
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachBenhPhamInterface>
        tableProps={props}
        title={"Trạng thái"}
        className="text-center text-white align-middle bg-pri min-w-150px"
      />
    ),
    id: "trangThai",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].trangThai} className="text-center"/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachBenhPhamInterface>
        tableProps={props}
        title={"Số phiếu"}
        className="text-center text-white align-middle bg-pri min-w-150px"
      />
    ),
    id: "soPhieu",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].soPhieu} className="text-center"/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachBenhPhamInterface>
        tableProps={props}
        title={"Barcode"}
        className="text-center text-white align-middle bg-pri min-w-150px"
      />
    ),
    id: "thanhTien",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].barcode} className="text-center"/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachBenhPhamInterface>
        tableProps={props}
        title={"Mã BN"}
        className="text-center text-white align-middle bg-pri min-w-100px"
      />
    ),
    id: "maBN",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].maBN} className="text-center"/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachBenhPhamInterface>
        tableProps={props}
        title={"Tên bệnh nhân"}
        className="text-center text-white align-middle bg-pri min-w-200px"
      />
    ),
    id: "tenBN",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].tenBN} className=""/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachBenhPhamInterface>
        tableProps={props}
        title={"Giới tính"}
        className="text-center text-white align-middle bg-pri min-w-80px"
      />
    ),
    id: "gioiTinh",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].gioiTinh} className="text-center"/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachBenhPhamInterface>
        tableProps={props}
        title={"Ngày sinh"}
        className="text-center text-white align-middle bg-pri min-w-100px"
      />
    ),
    id: "ngaySinh",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].ngaySinh} className="text-center"/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachBenhPhamInterface>
        tableProps={props}
        title={"Số thẻ BHYT"}
        className="text-center text-white align-middle bg-pri min-w-150px"
      />
    ),
    id: "bhyt",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].BHYT} className="text-center"/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachBenhPhamInterface>
        tableProps={props}
        title={"Khoa"}
        className="text-center text-white align-middle bg-pri min-w-150px"
      />
    ),
    id: "khoa",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].khoa} className="text-center"/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachBenhPhamInterface>
        tableProps={props}
        title={"Phòng chỉ định"}
        className="text-center text-white align-middle bg-pri min-w-250px"
      />
    ),
    id: "phongChiDinh",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].phongChiDinh}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachBenhPhamInterface>
        tableProps={props}
        title={"TG chỉ định"}
        className="text-center text-white align-middle bg-pri min-w-200px"
      />
    ),
    id: "TGChiDinh",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].TGChiDinh} className="text-center"/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachBenhPhamInterface>
        tableProps={props}
        title={"TG lấy mẫu"}
        className="text-center text-white align-middle bg-pri min-w-200px"
      />
    ),
    id: "TGLayMau",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].TGLayMau} className="text-center pe-3"/>
    ),
  },
];