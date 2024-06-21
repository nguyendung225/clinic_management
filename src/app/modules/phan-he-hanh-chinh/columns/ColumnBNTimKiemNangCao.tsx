import { Column } from "react-table";
import { TableCustomHeader } from "../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../component/table/components/TableCustomCell";

export const BenhNhanColumn: ReadonlyArray<Column<any>> = [
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Mã BN"}
        className='text-center min-w-80px'
      />
    ),
    id: 'maBn',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maBn}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Tên Bệnh Nhân"}
        className='text-center min-w-150px'
      />
    ),
    id: 'tenBenhNhan',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.tenBenhNhan}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Số BHYT"}
        className='text-center min-w-100px'
      />
    ),
    id: 'soBHYT',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.soBHYT}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Giới Tính"}
        className='text-center min-w-90px'
      />
    ),
    id: 'gioiTinh',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.gioiTinh}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Tuổi"}
        className='text-center min-w-100px'
      />
    ),
    id: 'tuoi',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.tuoi}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Khoa Điều Trị"}
        className='text-center min-w-125px'
      />
    ),
    id: 'khoaDieuTri',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.khoaDieuTri}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Phòng Điều Trị"}
        className='text-center min-w-150px'
      />
    ),
    id: 'phongDieuTri',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.phongDieuTri}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Giường"}
        className='text-center min-w-100px'
      />
    ),
    id: 'giuong',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.giuong}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Bác Sĩ Điều Trị"}
        className='text-center min-w-150px'
      />
    ),
    id: 'bacSiDieuTri',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.bacSiDieuTri}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Bắt Đầu BHYT"}
        className='text-center min-w-150px'
      />
    ),
    id: 'batDauBHYT',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.batDauBHYT}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Kết Thúc BHYT"}
        className='text-center min-w-150px'
      />
    ),
    id: 'ketThucBHYT',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.ketThucBHYT}
      />
    ),
  },
];