// @ts-nocheck
import { TableCustomCell } from "../../../component/table/components/TableCustomCell";
import { TableCustomHeader } from "../../../component/table/components/TableCustomHeader";

const columnsDSMauChiDinhVatTu = [
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Mã vật tư"}
        className="p-table text-center min-w-150px "
      />
    ),
    id: "Mã vật tư",
    Cell: ({ ...props }) => (
      <TableCustomCell
        data={props?.data[props?.row?.index]?.idVatTu}
        className="p-table cell-first-child text-center ps-0"
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Tên vật tư"}
        className="p-table text-center min-w-175px"
      />
    ),
    id: "Tên vật tư",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-center text-uppercase"
        data={props?.data[props?.row?.index]?.tenVatTu || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Đơn vị"}
        className="p-table text-center min-w-175px"
      />
    ),
    id: "Đơn vị",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-center text-uppercase"
        data={props?.data[props?.row?.index]?.donVi || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Tồn kho"}
        className="p-table text-center min-w-175px"
      />
    ),
    id: "Tồn kho",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-center text-uppercase"
        data={props?.data[props?.row?.index]?.tonKho || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Giá BHYT"}
        className="p-table text-center min-w-250px"
      />
    ),
    id: "Giá BHYT",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-center text-uppercase"
        data={props?.data[props?.row?.index]?.giaBhyt || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Giá viện phí"}
        className="p-table text-center min-w-250px"
      />
    ),
    id: "Giá viện phí",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-center text-uppercase"
        data={props?.data[props?.row?.index]?.giaVienPhi || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Giá dịch vụ"}
        className="p-table text-center min-w-250px"
      />
    ),
    id: "Giá dịch vụ",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-center text-uppercase"
        data={props?.data[props?.row?.index]?.giaDichVu || ""}
      />
    ),
  },
];
const columnsPhieuChiDinhVatTu = [
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"STT"}
        className="p-table text-center min-w-80"
      />
    ),
    id: "STT",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-center text-uppercase"
        data={+props.row.id + 1}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Mã vật tư"}
        className="p-table text-center min-w-120px"
      />
    ),
    id: "Mã vật tư",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-center text-uppercase"
        data={props?.data[props?.row?.index]?.maVatTu || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Tên vật tư"}
        className="p-table text-center min-w-175px"
      />
    ),
    id: "Tên vật tư",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-center text-uppercase"
        data={props?.data[props?.row?.index]?.tenVatTu || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Đơn vị"}
        className="p-table text-center min-w-175px"
      />
    ),
    id: "Đơn vị",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-center text-uppercase"
        data={props?.data[props?.row?.index]?.donVi || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Số lượng"}
        className="p-table text-center min-w-80px"
      />
    ),
    id: "Số lượng",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-center text-uppercase"
        data={props?.data[props?.row?.index]?.soLuong || ""}
      />
    ),
  },
];
const columnsDSMauChiDinhChiTiet = [
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Mã chỉ định"}
        className="p-table text-center min-w-150px "
      />
    ),
    id: "Mã chỉ định",
    Cell: ({ ...props }) => (
      <TableCustomCell
        data={props?.data[props?.row?.index]?.maChiDinh}
        className="p-table cell-first-child text-center ps-0"
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Tên chỉ định"}
        className="p-table text-center min-w-175px"
      />
    ),
    id: "Tên chỉ định",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-center text-uppercase"
        data={props?.data[props?.row?.index]?.tenChiDinh || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Nhóm dịch vụ"}
        className="p-table text-center min-w-175px"
      />
    ),
    id: "Nhóm dịch vụ",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-center text-uppercase"
        data={props?.data[props?.row?.index]?.nhomDichVu || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Loại dịch vụ"}
        className="p-table text-center min-w-175px"
      />
    ),
    id: "Loại dịch vụ",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-center text-uppercase"
        data={props?.data[props?.row?.index]?.loaiDichVu || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Mẫu riêng của bác sĩ"}
        className="p-table text-center min-w-250px"
      />
    ),
    id: "Mẫu riêng của bác sĩ",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-center text-uppercase"
        data={props?.data[props?.row?.index]?.mauRiengCuaBacSi || ""}
      />
    ),
  },
];
const columnsPhieuChiDinhCu = [
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Ngày y lệnh"}
        className="p-table text-center min-w-150px "
      />
    ),
    id: "Ngày y lệnh",
    Cell: ({ ...props }) => (
      <TableCustomCell
        data={props?.data[props?.row?.index]?.ngayYLenh}
        className="p-table cell-first-child text-center ps-0"
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Người kê"}
        className="p-table text-center min-w-150px"
      />
    ),
    id: "Người kê",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-center text-uppercase"
        data={props?.data[props?.row?.index]?.nguoiKeKhai || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Phòng khám"}
        className="p-table text-center min-w-150px"
      />
    ),
    id: "Phòng khám",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-center text-uppercase"
        data={props?.data[props?.row?.index]?.phongKham || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Chẩn đoán"}
        className="p-table text-center min-w-150px"
      />
    ),
    id: "Chẩn đoán",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-center text-uppercase"
        data={props?.data[props?.row?.index]?.chanDoan || ""}
      />
    ),
  },
];

const columnsPhieuChiDinhCuVatTu = [
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"STT"}
        className="p-table text-center min-w-40px "
      />
    ),
    id: "STT",
    Cell: ({ ...props }) => (
      <TableCustomCell
        data={props?.data[props?.row?.index]?.maChiDinh}
        className="p-table cell-first-child text-center ps-0"
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Tên vật tư"}
        className="p-table text-center min-w-175px "
      />
    ),
    id: "Tên vật tư",
    Cell: ({ ...props }) => (
      <TableCustomCell
        data={props?.data[props?.row?.index]?.tenVatTu}
        className="p-table cell-first-child text-center ps-0"
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Đơn vị"}
        className="p-table text-center min-w-150px"
      />
    ),
    id: "Đơn vị",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-center text-uppercase"
        data={props?.data[props?.row?.index]?.donVi || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Số lượng"}
        className="p-table text-center min-w-150px"
      />
    ),
    id: "Số lượng",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-center text-uppercase"
        data={props?.data[props?.row?.index]?.soLuong || ""}
      />
    ),
  }
];


export { columnsDSMauChiDinhVatTu, columnsPhieuChiDinhVatTu, columnsDSMauChiDinhChiTiet, columnsPhieuChiDinhCu, columnsPhieuChiDinhCuVatTu };
