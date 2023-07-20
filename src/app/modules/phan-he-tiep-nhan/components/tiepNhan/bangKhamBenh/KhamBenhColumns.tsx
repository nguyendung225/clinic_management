// @ts-nocheck
import { Column } from 'react-table'
import { useIntl } from 'react-intl'
import { bangKhamBenh } from '../../../models/PhanHeTiepNhanModel'
import { UserCustomHeader } from '../../../../apps/user-management/users-list/table/columns/UserCustomHeader'
import { ButtonToolbar, Form, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { convertNumberPrice } from '../../../../utils/FormatUtils'
function useCustomIntl(messageId: string) {
  const intl = useIntl()
  return intl.formatMessage({ id: messageId })
}
const KhamBenhColumns: ReadonlyArray<Column<bangKhamBenh>> = [
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title='Mã DV'
        className='min-w-60px text-center'
      />
    ),
    id: 'MaDV',
    Cell: ({ ...props }) => (
      <div className='min-w-60px text-center ps-3'>{props.data[props.row.index].code}</div>
    )
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title='Tên dịch vụ'
        className='min-w-150px text-start'
      />
    ),
    id: 'tenDC',
    Cell: ({ ...props }) => (
      <div className='min-w-150px text-start'>{props.data[props.row.index].name}</div>
    ),
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title='Nơi thực hiện'
        className='min-w-150px text-start'
      />
    ),
    id: 'noithuchien',
    Cell: ({ ...props }) => (
      <div className='min-w-150px text-start'>{props.data[props.row.index].noiThucHien}</div>
    ),
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title='Đơn giá'
        className='min-w-80px text-center'
      />
    ),
    id: 'donGia',
    Cell: ({ ...props }) => {
      let value = props.data[props.row.index].donGia;
      return (
        <div className='min-w-60px text-center'>
          {convertNumberPrice(value)}
        </div>
      )
    }
  },
  
]

export { KhamBenhColumns }
