import React, { FC, useEffect, useMemo, useState } from 'react'
import { CustomHeaderColumn } from './CustomHeaderColumn'
import { CustomRow } from './CustomRow'
import { Column, ColumnInstance, Row, useTable } from 'react-table'
import { useIntl } from 'react-intl'

import { ButtonToolbar, OverlayTrigger, Spinner, Tooltip } from 'react-bootstrap'
import { KTCardBody } from '../../../../../../_metronic/helpers'
import { useQueryResponseLoading } from '../../../../apps/user-management/users-list/core/QueryResponseProvider'
import { bangKhamBenh, bangKhamBenhProps } from '../../../models/PhanHeTiepNhanModel'
import { KhamBenhColumns } from './KhamBenhColumns'
import { TablePagination } from '../../../../component/TablePagination'
import { UsersListLoading } from '../../../../apps/user-management/users-list/components/loading/UsersListLoading'
import { UserCustomHeader } from '../../../../apps/user-management/users-list/table/columns/UserCustomHeader'
import { TableCustomHeader } from '../../../../component/table-custom-v2/columns/TableCustomHeader'

const BangKhamBenh: FC<bangKhamBenhProps> = (props) => {
  const { state, keyword, listData, handleDeleteDichVu } = props;
  const intl = useIntl()
  const isLoading = useQueryResponseLoading()
  const [page, setPage] = useState<number>(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const ActionColumns: ReadonlyArray<Column<bangKhamBenh>> = [
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title='Thao tác'
          className='min-w-80px text-center'
        />
      ),
      id: 'thaoTac',
      Cell: ({ ...props }) => {
        return (
          <div className="d-flex justify-content-center align-items-center pe-3">
            <ButtonToolbar>
              <OverlayTrigger 
                placement="top"
                delay={150}
                overlay={
                  <Tooltip id="tooltip" className="in">
                    <b className="fs-7">Xóa</b>
                  </Tooltip>
                }
              >
                <i 
                  className="fa-solid fa-trash text-danger fs-4 cursor-pointer"
                  onClick={() => handleDeleteDichVu?.(props.data[props.row.index]?.id)}
                ></i>
            </OverlayTrigger>
          </ButtonToolbar>
        </div>
        )
      }
    },
  ]
  const columns = useMemo(() => [...KhamBenhColumns, ...ActionColumns],[listData])
  const [loading, setLoading] = useState(false);

  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable({
    columns,
    data: listData,
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
              {headers.map((column: ColumnInstance<bangKhamBenh>) => (
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
              rows.map((row: Row<bangKhamBenh>, i) => {
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
export default BangKhamBenh
