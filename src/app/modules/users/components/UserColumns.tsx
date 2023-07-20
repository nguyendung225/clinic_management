// @ts-nocheck
import {Column} from 'react-table'
import {UserCustomHeader} from '../../apps/user-management/users-list/table/columns/UserCustomHeader'
import {User} from '../models/UserModels'
import {UserAction} from './UserAction'
import {useIntl} from 'react-intl'
function useCustomIntl(messageId: string) {
  const intl = useIntl()
  return intl.formatMessage({id: messageId})
}
const UsersColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title={useCustomIntl('TABLE.INDEX')}
        className='min-w-30px text-center'
      />
    ),
    id: 'STT',
    Cell: ({...props}) => <div className='min-w-30px text-center ps-3'>{props.row.index + 1}</div>,
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title={useCustomIntl('TABLE.ACTION')}
        className='min-w-80px text-center'
      />
    ),
    id: 'action',
    Cell: (props) => {
      return <UserAction data={props.cell.row.original} />
    },
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title={useCustomIntl('USER.USERNAME')}
        className='min-w-125px text-start ps-5'
      />
    ),
    id: 'username',
    Cell: ({...props}) => (
      <div className='min-w-30px text-start ps-2'>{props.data[props.row.index].username}</div>
    ),
  },

  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title={useCustomIntl('USER.EMAIL')}
        className='min-w-125px text-start ps-5'
      />
    ),
    id: 'email',
    Cell: ({...props}) => (
      <div className='min-w-30px text-start ps-2'>{props.data[props.row.index].email}</div>
    ),
  },
]

export {UsersColumns}
