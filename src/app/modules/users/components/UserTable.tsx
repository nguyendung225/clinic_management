import React, {FC, useEffect, useMemo, useState} from 'react'
import {FooterTable} from '../../component/FooterTable'
import {UsersListPagination} from '../../apps/user-management/users-list/components/pagination/UsersListPagination'
import {UsersListLoading} from '../../apps/user-management/users-list/components/loading/UsersListLoading'
import {KTCardBody} from '../../../../_metronic/helpers'
import {CustomHeaderColumn} from './CustomHeaderColumn'
import {CustomRow} from './CustomRow'
import {useIntl} from 'react-intl'
import {ColumnInstance, Row, useTable} from 'react-table'
import {UsersColumns} from './UserColumns'
import {User, UserTableProps} from '../models/UserModels'
import {ROW_FOR_PAGE, PERMISSION} from '../const/UserConst'
import {handlePagesChange, handleRowsPerPageChange} from '../../utils/PageUtils'
import {useQueryResponseLoading} from '../../apps/user-management/users-list/core/QueryResponseProvider'
import '../../component/style.scss'
import {hasAuthority} from '../../utils/Permission'
import { useAppDispatch, useAppSelector } from '../../../hook'
import { fetchUsers } from '../reducer/reducer'
import store from '../../../store'
const UserTable: FC<UserTableProps> = (props) => {
  const {state, keyword} = props
  const intl = useIntl()
  const isLoading = useQueryResponseLoading()
  const [page, setPage] = useState<number>(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const { content: data, totalPages } = useAppSelector((state: { users: any }) => state.users);
  const dispatch = useAppDispatch()

  const updateData = () => {
    dispatch(fetchUsers({
      page, 
      rowOfPage: rowsPerPage, 
      keyword    
    })).unwrap()
    .then(() => {
      // originalPromiseResult: payload của một action đã hoàn thành
    })
    .catch(() => {
      //rejectedValueOrSerializedError: payload được tạo bởi rejectWithValue nếu có, từ một action bị từ chối (rejected)
    })
  }
  useEffect(() => {
    updateData()
  }, [])
  useEffect(() => {
    updateData()
  }, [page, rowsPerPage, state, keyword])
  const columns = useMemo(
    () =>
      UsersColumns.filter((column) => (!hasAuthority(PERMISSION) ? column.id !== 'action' : true)),
    []
  )
  const {getTableProps, getTableBodyProps, headers, rows, prepareRow} = useTable({
    columns,
    data,
  })
  console.log("STORE", store.getState());
  
  return (
    <KTCardBody className='py-4'>
      <div className='table-responsive bg-white'>
        <table
          id='kt_table_users'
          className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer '
          {...getTableProps()}
        >
          <thead>
            <tr className='text-start fw-bolder fs-7 gs-0 text-white border bg-pri'>
              {headers.map((column: ColumnInstance<User>) => (
                <CustomHeaderColumn key={column.id} column={column} />
              ))}
            </tr>
          </thead>
          <tbody className='text-gray-600 fw-bold border' {...getTableBodyProps()}>
            {rows.length > 0 ? (
              rows.map((row: Row<User>, i) => {
                prepareRow(row)
                return <CustomRow row={row} key={`row-${i}-${row.id}`} />
              })
            ) : (
              <tr>
                <td colSpan={7}>
                  <div className='d-flex text-center w-100 align-content-center justify-content-center'>
                    {intl.formatMessage({id: 'TABLE.DATA.EMPTY'})}
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <FooterTable
          handlePagesChange={handlePagesChange}
          handleRowsPerPageChange={handleRowsPerPageChange}
          rowsPerPage={rowsPerPage}
          rowsForPage={ROW_FOR_PAGE}
          page={page}
          setPage={setPage}
          setRowsPerPage={setRowsPerPage}
          totalPages={totalPages}
        />
      </div>

      <UsersListPagination />
      {isLoading && <UsersListLoading />}
    </KTCardBody>
  )
}

export default UserTable
