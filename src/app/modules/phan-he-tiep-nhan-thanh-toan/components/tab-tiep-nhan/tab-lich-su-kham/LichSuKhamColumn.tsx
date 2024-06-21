// @ts-nocheck
import { Column } from 'react-table'
import { useIntl } from 'react-intl'
import { bangLichSuKham } from '../../../models/PhanHeTiepNhanModel'
import { TableCustomHeader } from '../../../../component/table/components/TableCustomHeader'
import { TableCustomCell } from '../../../../component/table/components/TableCustomCell'

const LichSuKhamColumn: ReadonlyArray<Column<bangLichSuKham>> = [
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='Ngày vào'
        className=' min-w-100px text-center '
      />
    ),
    id: 'member.ngayVao',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-150px text-center p-2' data={props.data[props.row.index].ngay}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='Hình thức vào'
        className=' min-w-100px text-center '
      />
    ),
    id: 'member.hinhThucVao',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-150px text-center p-2' data={props.data[props.row.index].hinhThucVao}/>
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
    id: 'member.position',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-200px text-start p-2' data={props.data[props.row.index]?.khoa}/>
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
    id: 'phong',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-100px text-start p-2' data={props.data[props.row.index]?.phong}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='Bác sĩ điều trị'
        className='min-w-200px text-center  '
      />
    ),
    id: 'bacSi',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-200px text-start p-2' data={props.data[props.row.index]?.bacSi}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='Thẻ BHYT'
        className='min-w-200px text-center  '
      />
    ),
    id: 'bhyt',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-200px text-start p-2' data={props.data[props.row.index]?.theBHYT}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='Ngày sinh'
        className='min-w-200px text-center  '
      />
    ),
    id: 'ngaySinh',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-200px text-start p-2' data={props.data[props.row.index]?.ngaySinh}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='Ngày ra'
        className='min-w-200px text-center  '
      />
    ),
    id: 'ngayRa',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-200px text-start p-2' data={props.data[props.row.index]?.ngayRa}/>
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
    id: 'xuTri',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-200px text-start p-2' data={props.data[props.row.index]?.xuTri}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='Đích'
        className='min-w-200px text-center  '
      />
    ),
    id: 'dich',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-200px text-start p-2' data={props.data[props.row.index]?.dich}/>
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
      <TableCustomCell className='min-w-200px text-start p-2' data={props.data[props.row.index]?.chuanDoan}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='Thông tin khác'
        className='min-w-200px text-center  '
      />
    ),
    id: 'thongTinKhac',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-200px text-start p-2' data={props.data[props.row.index]?.thongTinKhac}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='PR_ID'
        className='min-w-200px text-center  '
      />
    ),
    id: 'prId',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-200px text-start p-2' data={props.data[props.row.index]?.prId}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='PR_VP_ID'
        className='min-w-200px text-center  '
      />
    ),
    id: 'prVpId',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-200px text-start p-2' data={props.data[props.row.index]?.prVpId}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<bangLichSuKham>
        tableProps={props}
        title='MR_ID'
        className='min-w-200px text-center  '
      />
    ),
    id: 'mrId',
    Cell: ({ ...props }) => (
      <TableCustomCell className='min-w-200px text-start p-2' data={props.data[props.row.index]?.mrId}/>
    ),
  },
]

export { LichSuKhamColumn }
