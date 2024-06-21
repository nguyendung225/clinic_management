import { Column } from "react-table";
import { TableCustomHeader } from "../../../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../../../component/table/components/TableCustomCell";

export const DsVatTuColumn: ReadonlyArray<Column<any>> = [
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Mã Vật Tư"}
        className='text-center min-w-100px'
      />
    ),
    id: 'maVatTu',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maVatTu}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Mã Tương Đương"}
        className='text-center spaces min-w-155'
      />
    ),
    id: 'maTuongDuong',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maTuongDuong}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Mã Chạy Phác Đồ"}
        className='text-center spaces min-w-155'
      />
    ),
    id: 'maChayPhacDo',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maChayPhacDo}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Tên Vật Tư"}
        className='text-center min-w-200px'
      />
    ),
    id: 'tenVatTu',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.tenVatTu}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Tên Vật Tư Bệnh Viện"}
        className='text-center min-w-200px'
      />
    ),
    id: 'tenVatTuBenhVien',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.tenVatTuBenhVien}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Đơn Vị"}
        className='text-center min-w-80px'
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
        title={"Số Đăng Ký"}
        className='text-center min-w-125px'
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
        title={"Số Lô"}
        className='text-center min-w-70px'
      />
    ),
    id: 'soLo',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.soLo}
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
        className='text-center min-w-125px'
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
        className='text-center min-w-125px'
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
        title={"Giá Mua"}
        className='text-center min-w-100px'
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
        title={"VAT"}
        className='text-center min-w-100px'
      />
    ),
    id: 'VAT',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.VAT}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Giá Dịch Vụ"}
        className='text-center min-w-125px'
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
        className='text-center min-w-125px'
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
        className='text-center min-w-125px'
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
        title={"Ngày Nhập"}
        className='text-center min-w-100px'
      />
    ),
    id: 'ngayNhap',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.ngayNhap}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"ID"}
        className='text-center min-w-100px'
      />
    ),
    id: 'id',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.id}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Mã Import"}
        className='text-center min-w-100px'
      />
    ),
    id: 'maImport',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maImport}
      />
    ),
  },
];


export const donViColumn: ReadonlyArray<Column<any>> = [
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"đơn vị"}
        className='text-center min-w-70px'
      />
    ),
    id: 'donVi',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.donVi}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Quy đổi [Đơn vị tính -> Đơn vị kho]"}
        className='text-center spaces min-w-300px'
      />
    ),
    id: 'quyDoi',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.quyDoi}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"danh sách kho"}
        className='text-center spaces min-w-360'
      />
    ),
    id: 'danhSachKho',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.danhSachKho}
      />
    ),
  },
]

export const dsKhoColumn: ReadonlyArray<Column<any>> = [
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Mã phòng"}
        className='text-center min-w-70px'
      />
    ),
    id: 'maPhong',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maPhong}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Tên khoa phòng"}
        className='text-center spaces min-w-300px'
      />
    ),
    id: 'tenKhoaPhong',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.tenKhoaPhong}
      />
    ),
  },
]