import {useMemo, useState, useEffect} from 'react'
import {useTable, ColumnInstance, Row} from 'react-table'
import {CustomHeaderColumn} from './columns/CustomHeaderColumn'
import {CustomRow} from './columns/CustomRow'
import {useQueryResponseLoading} from '../../../apps/user-management/users-list/core/QueryResponseProvider'
import {ProjectsColumns} from './columns/ProjectsColumns'
import {KTCardBody} from '../../../../../_metronic/helpers'
import {ProjectType} from '../../models/ProjectModels'
import {useIntl} from 'react-intl'
import {searchByPage} from '../../services/ProjectServices'
import {Spinner} from 'react-bootstrap'
import {toast} from 'react-toastify'
import {ROWS_PER_PAGE_LIST} from '../../const/ProjectConst'
import {FooterTable} from '../../../component/FooterTable'
import {handlePagesChange, handleRowsPerPageChange} from '../../../utils/PageUtils'
import {hasAuthority} from '../../../utils/Permission'

const ProjectsTable = (props: any) => {
  let {state} = props
  const isLoading = useQueryResponseLoading()
  const intl = useIntl()
  const columns = useMemo(() => ProjectsColumns.filter(
    column =>
      !hasAuthority('PROJECT.UPDATE') && !hasAuthority('PROJECT.DELETE')
        ? column.id !== 'actions'
        : true
  ), [])
  const [page, setPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<ProjectType[]>([])

  const getAllItem = () => {
    setLoading(true)
    let keyword = ''
    searchByPage(keyword, page, rowsPerPage).then(({data}) => {
      setData(data.data.content)
      setTotalPages(data.data.totalPages)
      setLoading(false)
    }).catch(() => {
      setLoading(false)
      toast.error(intl.formatMessage({id: "TOAST.GET.ERROR"}))
    })
  }

  const updatePageData = () => {
    getAllItem()
  }

  useEffect(() => {
    updatePageData()
  }, [state, page, rowsPerPage])

  const {getTableProps, getTableBodyProps, headers, rows, prepareRow} = useTable({
    columns,
    data,
  })

  return (
    <KTCardBody className='mt-5'>
      <div className='table-responsive'>
        <table
          id='kt_table_users'
          className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
          {...getTableProps()}
        >
          <thead className='bg-primary border border-gray-300'>
            <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
              {headers.map((column: ColumnInstance<ProjectType>) => (
                <CustomHeaderColumn key={column.id} column={column} />
              ))}
            </tr>
          </thead>
          <tbody
            className='text-gray-600 fw-bold bg-white border border-gray-300 position-relative'
            {...getTableBodyProps()}
          >
            {loading && (
              <div className='loading-table'>
                <Spinner animation='border' variant='primary' />
              </div>
            )}
            {rows.length > 0 ? (
              rows.map((row: Row<ProjectType>, i) => {
                prepareRow(row)
                return <CustomRow row={row} key={`row-${i}-${row.id}`} />
              })
            ) : (
              <tr>
                <td colSpan={7}>
                  <div className='d-flex text-center w-100 align-content-center justify-content-center'>
                    {!loading && intl.formatMessage({id: 'TABLE.DATA.EMPTY'})}
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
          rowsForPage={ROWS_PER_PAGE_LIST}
          page={page}
          setPage={setPage}
          setRowsPerPage={setRowsPerPage}
          totalPages={totalPages}
        />
      </div>
    </KTCardBody>
  )
}

export {ProjectsTable}
