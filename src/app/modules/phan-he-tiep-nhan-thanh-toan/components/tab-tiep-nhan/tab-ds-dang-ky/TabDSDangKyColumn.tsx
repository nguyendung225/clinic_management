import { Column } from "react-table";
import { TableCustomCell } from "../../../../component/table/components/TableCustomCell";
import { TableCustomHeader } from "../../../../component/table/components/TableCustomHeader";
import { IDSDangKy } from "../../../models/ModelTabDSDangKy";

export const columnDsDangKy: ReadonlyArray<Column<IDSDangKy>> = [
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title='Ngày đến khám'
        className="col-1 text-center text-white px-3 min-w-150px"
      />
    ),
    id: 'ngayDenKham',
    Cell: ({ ...props }) => (
      <TableCustomCell className='text-center p-1' data={props.row.original?.ngayDenKham}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title='Hình thức vào'
        className="col-1 text-center text-white px-3 min-w-150px"
      />
    ),
    id: 'hinhThucVao',
    Cell: ({ ...props }) => (
      <TableCustomCell className='text-center p-1' data={props.row.original?.hinhThucVao}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title='Phòng khám'
        className="col-1 text-center text-white px-3 min-w-225px"
      />
    ),
    id: 'phongKham',
    Cell: ({ ...props }) => (
      <TableCustomCell className="p-1" data={props.row.original?.phongKham}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title='Dịch vụ khám'
        className="col-1 text-center text-white px-3 min-w-225px"
      />
    ),
    id: 'dichVuKham',
    Cell: ({ ...props }) => (
      <TableCustomCell className='p-1' data={props.row.original?.dichVuKham}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title='STT Khám'
        className="col-1 text-center text-white px-3 min-w-100px"
      />
    ),
    id: 'sttKham',
    Cell: ({ ...props }) => (
      <TableCustomCell className='text-center' data={props.row.original?.sttKham}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title='Trạng thái'
        className="col-1 text-center text-white px-3 min-w-150px"
      />
    ),
    id: 'trangThai',
    Cell: ({ ...props }) => (
      <TableCustomCell className='text-center' data={props.row.original?.trangThai}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title='Ngày khám'
        className="col-1 text-center text-white px-3 min-w-125px"
      />
    ),
    id: 'ngayKham',
    Cell: ({ ...props }) => (
      <TableCustomCell className='text-center' data={props.row.original?.ngayKham}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title='Bác sĩ khám'
        className="col-1 text-center text-white px-3 min-w-225px"
      />
    ),
    id: 'bacSiKham',
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.row.original?.bacSiKham}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title='Ngày ra'
        className="col-1 text-center text-white px-3 min-w-125px"
      />
    ),
    id: 'ngayRa',
    Cell: ({ ...props }) => (
      <TableCustomCell className='text-center' data={props.row.original?.ngayRa}/>
    ),
  },
]