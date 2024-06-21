// @ts-nocheck
import { Column } from 'react-table'
import { bangLichSuKham } from '../../../models/BenhNhanModel'
import { TableCustomHeader } from '../../../component/table/components/TableCustomHeader'
import { TableCustomCell } from '../../../component/table/components/TableCustomCell'
import { HINH_THUC } from '../../constants/BenhNhanConst'

const LichSuKhamColumn: ReadonlyArray<Column<bangLichSuKham>> = [
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"STT"}
        className=""
      />
    ),
    id: "STT",
    Cell: ({...props}) => (
      <TableCustomCell className="text-center" data={(props.row.index + 1).toString()} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='Ngày vào'
        className='d-flex align-items-center justify-content-center min-w-100px text-center '
      />
    ),
    id: 'member.ngayVao',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-150px text-center ' data={props.data[props.row.index].ngayVao}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='Hình thức'
        className='d-flex align-items-center justify-content-center min-w-100px text-center '
      />
    ),
    id: 'Hình thức',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-150px text-center ' data={props.data[props.row.index].hinhThuc===HINH_THUC.benhMoi.code?"Bệnh mới":"Tái khám"}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='Khoa'
        className='min-w-200px text-center  '
      />
    ),
    id: 'Khoa',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-200px text-start ' data={props.data[props.row.index]?.khoa}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='Phòng'
        className='min-w-100px text-center  '
      />
    ),
    id: 'Phòng',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-100px text-start ' data={props.data[props.row.index]?.phong}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='Bác sĩ'
        className='min-w-200px text-center  '
      />
    ),
    id: 'bacSi',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-200px text-start ' data={props.data[props.row.index]?.bacSi}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='BHYT'
        className='min-w-200px text-center  '
      />
    ),
    id: 'BHYT',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-200px text-center ' data={props.data[props.row.index]?.bhyt}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='Ngày sinh'
        className='min-w-150px text-center  '
      />
    ),
    id: 'Ngày sinh',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-150px text-center ' data={props.data[props.row.index]?.ngaySinh}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='Ngày ra'
        className='min-w-150px text-center  '
      />
    ),
    id: 'Ngày ra',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-150px text-center ' data={props.data[props.row.index]?.ngayRa}/>
    ),
  }, 
    {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='Xử trí'
        className='min-w-200px text-center  '
      />
    ),
    id: 'Xử trí',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-200px text-start ' data={props.data[props.row.index]?.xuTri}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='Chẩn đoán'
        className='min-w-200px text-center  '
      />
    ),
    id: 'chuanDoan',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-200px text-start ' data={props.data[props.row.index]?.chuanDoan}/>
    ),
  },
 
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='Ghi chú'
        className='min-w-200px text-center  '
      />
    ),
    id: 'ghiChu',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-200px text-start ' data={props.data[props.row.index]?.ghiChu}/>
    ),
  },
]

export { LichSuKhamColumn }
