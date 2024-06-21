import { Column } from "react-table";
import { TableCustomHeader } from "../../../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../../../component/table/components/TableCustomCell";

export const LichSuNhapXuatColumn: ReadonlyArray<Column<any>> = [
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"ID"}
        className='text-center min-w-70px'
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
        title={"Số Phiếu"}
        className='text-center min-w-100px'
      />
    ),
    id: 'soPhieu',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.soPhieu}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Thời Gian"}
        className='text-center min-w-100px'
      />
    ),
    id: 'thoiGian',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.thoiGian}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Số Lượng"}
        className='text-center min-w-100px'
      />
    ),
    id: 'soLuong',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.soLuong}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Đơn Giá"}
        className='text-center min-w-100px'
      />
    ),
    id: 'donGia',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.donGia}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Số Lô"}
        className='text-center min-w-100px'
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
        title={"Hạn Sử Dụng"}
        className='text-center min-w-125px'
      />
    ),
    id: 'hanSuDung',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.hanSuDung}
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
    id: 'soDK',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.soDK}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Người Thực Hiện"}
        className='text-center spaces min-w-140'
      />
    ),
    id: 'nguoiThucHien',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.nguoiThucHien}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Lần Sử Dụng"}
        className='text-center min-w-125px'
      />
    ),
    id: 'lanSuDung',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.lanSuDung}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Mã BN"}
        className='text-center min-w-100px'
      />
    ),
    id: 'maBN',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maBN}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Tên BN"}
        className='text-center min-w-150px'
      />
    ),
    id: 'tenBN',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.tenBN}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Khoa Phòng"}
        className='text-center min-w-125px'
      />
    ),
    id: 'khoaPhong',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.khoaPhong}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Ngày Trả"}
        className='text-center min-w-100px'
      />
    ),
    id: 'ngayTra',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.ngayTra}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Diễn Giải"}
        className='text-center min-w-100px'
      />
    ),
    id: 'dienGiai',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.dienGiai}
      />
    ),
  },
];