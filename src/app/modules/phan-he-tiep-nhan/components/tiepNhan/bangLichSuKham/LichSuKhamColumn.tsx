// @ts-nocheck
import { Column } from 'react-table'
import { useIntl } from 'react-intl'
import { bangLichSuKham } from '../../../models/PhanHeTiepNhanModel'
import { UserCustomHeader } from '../../../../apps/user-management/users-list/table/columns/UserCustomHeader'
function useCustomIntl(messageId: string) {
  const intl = useIntl()
  return intl.formatMessage({ id: messageId })
}
const LichSuKhamColumn: ReadonlyArray<Column<bangLichSuKham>> = [
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title='Lần'
        className='min-w-60px text-center'
      />
    ),
    id: 'member.code',
    Cell: ({ ...props }) => (
      <div className='min-w-60px text-center'>{props.data[props.row.index].memberCode}</div>
    ),
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title='Ngày'
        className='min-w-100px text-start pe-4'
      />
    ),
    id: 'member.name',
    Cell: ({ ...props }) => (
      <div className='min-w-100px text-start'>{props.data[props.row.index].memberName}</div>
    ),
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title='Khám'
        className='min-w-200px text-start pe-4'
      />
    ),
    id: 'member.position',
    Cell: ({ ...props }) => (
      <div className='min-w-200px text-start'>{props.data[props.row.index].position}</div>
    ),
  },
]

export { LichSuKhamColumn }
