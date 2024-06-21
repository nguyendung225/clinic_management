import { Column } from "react-table";
import { IVatTuTrongKho } from "../../models/ModelVatTuTrongKho";
import { TableCustomHeader } from "../../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../../component/table/components/TableCustomCell";

export const vatTuTrongTatCaKhoColumn: ReadonlyArray<Column<any>> = [
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Mã Thuốc, Vật tư"}
        className='text-center min-w-150px'
      />
    ),
    id: 'maThuoc',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maThuoc}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Tên Thuốc, Vật tư"}
        className='text-center min-w-150px'
      />
    ),
    id: 'tenThuoc',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.tenThuoc}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"kho"}
        className='text-center min-w-125px'
      />
    ),
    id: 'kho',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.kho}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Hoạt Chất"}
        className='text-center min-w-125px'
      />
    ),
    id: 'hoatChat',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.hoatChat}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Hàm Lượng"}
        className='text-center spaces min-w-105'
      />
    ),
    id: 'hamLuong',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.hamLuong}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Đơn Vị"}
        className='text-center min-w-70px'
      />
    ),
    id: 'donVi',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.donVi}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Số Lô"}
        className='text-center min-w-60px'
      />
    ),
    id: 'soLo',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.soLo}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Tồn Kho"}
        className='text-center min-w-80px'
      />
    ),
    id: 'tonKho',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.tonKho}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Chờ Xuất"}
        className='text-center min-w-90px'
      />
    ),
    id: 'choXuat',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.choXuat}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Hạn Dùng"}
        className='text-center min-w-90px'
      />
    ),
    id: 'hanDung',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.hanDung}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Số Đăng Ký"}
        className='text-center spaces min-w-105'
      />
    ),
    id: 'soDangKy',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.soDangKy}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Đầu Kỳ (Khởi tạo)"}
        className='text-center spaces min-w-155'
      />
    ),
    id: 'dauKy',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.dauKy}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Giá Mua"}
        className='text-center min-w-80px'
      />
    ),
    id: 'giaMua',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.giaMua}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Giá Bán"}
        className='text-center min-w-80px'
      />
    ),
    id: 'giaBan',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.giaBan}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Giá Dịch Vụ"}
        className='text-center spaces min-w-105'
      />
    ),
    id: 'giaDichVu',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.giaDichVu}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Giá Bảo Hiểm"}
        className='text-center spaces min-w-115'
      />
    ),
    id: 'giaBaoHiem',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.giaBaoHiem}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Giá Viện Phí"}
        className='text-center spaces min-w-105'
      />
    ),
    id: 'giaVienPhi',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.giaVienPhi}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Quyết Định Trúng Thầu"}
        className='text-center min-w-200px'
      />
    ),
    id: 'quyetDinhTrungThau',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.quyetDinhTrungThau}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Số Gói Thầu"}
        className='text-center spaces min-w-110'
      />
    ),
    id: 'soGoiThau',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.soGoiThau}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Nhóm Thầu"}
        className='text-center spaces min-w-110'
      />
    ),
    id: 'nhomThau',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.nhomThau}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Năm Thầu"}
        className='text-center min-w-100px'
      />
    ),
    id: 'namThau',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.namThau}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"MedicineStoreID"}
        className='text-center spaces min-w-135'
      />
    ),
    id: 'medicineStoreId',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.medicineStore}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Medicine ID"}
        className='text-center spaces min-w-105'
      />
    ),
    id: 'medicineId',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.medicineId}
      />
    ),
  },
];