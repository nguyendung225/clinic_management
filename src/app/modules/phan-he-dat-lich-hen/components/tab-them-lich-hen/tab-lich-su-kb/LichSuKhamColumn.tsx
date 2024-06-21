// @ts-nocheck
import { Column } from 'react-table'
import { bangLichSuKham } from '../../../constants/constDatLichHen'
import { TableCustomHeader } from '../../../../component/table/components/TableCustomHeader'
import { TableCustomCell } from '../../../../component/table/components/TableCustomCell'

const LichSuKhamColumn: ReadonlyArray<Column<bangLichSuKham>> = [
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='Lần'
        className='min-w-40px text-center '
      />
    ),
    id: 'member.code',
    Cell: ({ ...props }) => (
      <TableCustomCell className='text-center' data={props.data[props.row.index].lan}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='Ngày vào'
        className='d-flex align-items-center justify-content-center min-w-100px text-center'
      />
    ),
    id: 'member.ngayVao',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-150px text-center' data={props.data[props.row.index].ngay}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='Hình thức vào'
        className='d-flex align-items-center justify-content-center min-w-100px text-center'
      />
    ),
    id: 'member.hinhThucVao',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-150px text-center' data={props.data[props.row.index].hinhThucVao}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='Khoa'
        className='min-w-200px text-center '
      />
    ),
    id: 'member.position',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-200px text-start' data={props.data[props.row.index]?.khoa}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='Phòng'
        className='min-w-100px text-center '
      />
    ),
    id: 'phong',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-100px text-start' data={props.data[props.row.index]?.phong}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='Bác sĩ'
        className='min-w-200px text-center '
      />
    ),
    id: 'bacSi',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-200px text-start' data={props.data[props.row.index]?.bacSi}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='Thẻ BHYT'
        className='min-w-200px text-center '
      />
    ),
    id: 'theBHYT',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-200px text-start' data={props.data[props.row.index]?.theBHYT}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='Ngày sinh'
        className='min-w-200px text-center '
      />
    ),
    id: 'ngaySinh',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-200px text-start' data={props.data[props.row.index]?.ngaySinh}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='Ngày ra'
        className='min-w-200px text-center '
      />
    ),
    id: 'ngayRa',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-200px text-start' data={props.data[props.row.index]?.ngayRa}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='Đích'
        className='min-w-200px text-center '
      />
    ),
    id: 'dich',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-200px text-start' data={props.data[props.row.index]?.dich}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='Chẩn đoán'
        className='min-w-200px text-center '
      />
    ),
    id: 'chuanDoan',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-200px text-start' data={props.data[props.row.index]?.chuanDoan}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='Xử lý'
        className='min-w-200px text-center '
      />
    ),
    id: 'xuLy',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-200px text-start' data={props.data[props.row.index]?.xuLy}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='Ghi chú'
        className='min-w-200px text-center '
      />
    ),
    id: 'ghiChu',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-200px text-start' data={props.data[props.row.index]?.ghiChu}/>
    ),
  },
]

export { LichSuKhamColumn }
