import { Column } from "react-table";
import { TableCustomCell } from "../../../../component/table/components/TableCustomCell";
import { TableCustomHeader } from "../../../../component/table/components/TableCustomHeader";
import { IPhieuThu } from "../../../models/ModelTabPhieuThu";

export const columnTabPhieuThu: ReadonlyArray<Column<IPhieuThu>> = [
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title='tên sổ thu'
        className="col-1 text-center text-white px-3 min-w-150px"
      />
    ),
    id: 'tenSoThu',
    Cell: ({ ...props }) => (
      <TableCustomCell className='p-1' data={props.row.original?.tenSoThu} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title='số phiếu'
        className="col-1 text-center text-white px-3 min-w-100px"
      />
    ),
    id: 'soPhieu',
    Cell: ({ ...props }) => (
      <TableCustomCell className='text-center p-1' data={props.row.original?.soPhieu} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title='loại phiếu'
        className="col-1 text-center text-white px-3 min-w-100px"
      />
    ),
    id: 'loaiPhieu',
    Cell: ({ ...props }) => (
      <TableCustomCell className='text-center p-1' data={props.row.original?.loaiPhieu} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title='Ngày tạo'
        className="col-1 text-center text-white px-3 min-w-100px"
      />
    ),
    id: 'ngayTao',
    Cell: ({ ...props }) => (
      <TableCustomCell className='text-center p-1' data={props.row.original?.ngayTao} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title='Người tạo'
        className="col-1 text-center text-white px-3 min-w-100px"
      />
    ),
    id: 'nguoiTao',
    Cell: ({ ...props }) => (
      <TableCustomCell className='p-1' data={props.row.original?.nguoiTao} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title='số tiền'
        className="col-1 text-center text-white px-3 min-w-100px"
      />
    ),
    id: 'soTien',
    Cell: ({ ...props }) => (
      <TableCustomCell className='text-center p-1' data={props.row.original?.soTien} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title='ghi chú'
        className="col-1 text-center text-white px-3 min-w-150px"
      />
    ),
    id: 'ghiChu',
    Cell: ({ ...props }) => (
      <TableCustomCell className='p-1' data={props.row.original?.ghiChu} />
    ),
  },
]