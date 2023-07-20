import React, { FC, useEffect, useMemo, useState } from 'react';
import { CustomHeaderColumn } from './CustomHeaderColumn';
import { CustomRow } from './CustomRow';
import { ColumnInstance, Row, useTable } from 'react-table';
import { useIntl } from 'react-intl';

import { Spinner } from 'react-bootstrap';
import { KTCardBody } from '../../../../../../_metronic/helpers';
import { useQueryResponseLoading } from '../../../../apps/user-management/users-list/core/QueryResponseProvider'
import { bangLichSuKham, bangLichSuKhamProps } from '../../../models/PhanHeTiepNhanModel'
import { LichSuKhamColumn } from './LichSuKhamColumn'
import { TablePagination } from '../../../../component/TablePagination'
import { UsersListLoading } from '../../../../apps/user-management/users-list/components/loading/UsersListLoading'
const BangLichSuKham: FC<bangLichSuKhamProps> = (props) => {
  const { state, keyword } = props
  const intl = useIntl()
  const isLoading = useQueryResponseLoading()
  const [page, setPage] = useState<number>(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const columns = useMemo(() => LichSuKhamColumn, [])
  const [data, setData] = useState<bangLichSuKham[]>([])
  const [loading, setLoading] = useState(false);

  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable({
    columns,
    data,
  })
  return (
    <KTCardBody className='py-4'>
      <div className='table-responsive bg-white'>
        <table
          id='kt_table_users'
          className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer '
          {...getTableProps()}
        >
          <thead>
            <tr className='text-start fw-bolder fs-7 gs-0 bg-pri text-white border'>
              {headers.map((column: ColumnInstance<bangLichSuKham>) => (
                <CustomHeaderColumn key={column.id} column={column} />
              ))}
            </tr>
          </thead>
          <tbody className='text-gray-600 fw-bold border position-relative' {...getTableBodyProps()}>
            {loading && (
              <div className='loading-table'>
                <Spinner animation='border' variant='primary' />
              </div>
            )}
            {rows.length > 0 ? (
              rows.map((row: Row<bangLichSuKham>, i) => {
                prepareRow(row)
                return <CustomRow row={row} key={`row-${i}-${row.id}`} />
              })
            ) : (
              <tr>
                <td colSpan={7}>
                  <div className='d-flex text-center w-100 align-content-center justify-content-center'>
                    {!loading && intl.formatMessage({ id: 'TABLE.DATA.EMPTY' })}
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {/* <TablePagination
          handlePagesChange={handlePagesChange}
          handleRowsPerPageChange={handleRowsPerPageChange}
          rowsPerPage={rowsPerPage}
          rowsForPage={ROWS_FOR_PAGE}
          page={page}
          setPage={setPage}
          setRowsPerPage={setRowsPerPage}
          totalPages={totalPages}
        /> */}
      </div>

      {isLoading && <UsersListLoading />}
    </KTCardBody>
  )
}
export default BangLichSuKham
