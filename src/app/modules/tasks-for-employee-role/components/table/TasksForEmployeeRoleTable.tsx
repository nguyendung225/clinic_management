import {useMemo, SetStateAction, Dispatch} from 'react'
import {useTable, ColumnInstance, Row, Column, HeaderProps} from 'react-table'
import {CustomHeaderColumn} from './columns/CustomHeaderColumn'
import {CustomRow} from './columns/CustomRow'
import {FixedColumns} from './columns/TasksColumns'
import {KTCardBody} from '../../../../../_metronic/helpers'
import {useIntl} from 'react-intl'
import {TaskType} from '../../models/TaskModels'
import {Spinner} from 'react-bootstrap'
import {ROWS_PER_PAGE_LIST} from '../../const/TasksForEmployeeRoleConst'
import {TasksCustomNestedHeader} from './columns/TasksCustomNestedHeader'
import {ProjectType} from '../../../projects/models/ProjectModels'
import {FooterTable} from '../../../component/FooterTable'
import {TasksCustomProjectCell} from './columns/TasksCustomProjectCell'
import {handlePagesChange} from '../../../utils/PageUtils'
import {handleRowsPerPageChange} from '../../../utils/PageUtils'

interface Props {
  taskData: TaskType[]
  state: boolean
  loading: boolean
  page: number
  setPage: Dispatch<SetStateAction<number>>
  rowsPerPage: number
  setRowsPerPage: Dispatch<SetStateAction<number>>
  totalPages: number
  setTotalPages: Dispatch<SetStateAction<number>>
  projectList: ProjectType[]
  daysInMonth: number
}

const TasksForEmployeeRoleTable = (props: Props) => {
  let {
    taskData,
    state,
    loading,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    totalPages,
    setTotalPages,
    projectList,
    daysInMonth
  } = props
  const intl = useIntl()

  let FlexibleColumns: ReadonlyArray<Column<TaskType>> = taskData
    ?.flatMap((pItem, pIndex) => {
      return pItem?.tasks?.map((item, index) => {
        return {
          Header: (props: HeaderProps<TaskType>) => {
            return (
              <TasksCustomNestedHeader
                tableProps={props}
                title={intl.formatMessage({id: 'MENU.CATEGORY.PROJECT'}) + ' ' + (index + 1)}
                className='align-middle min-w-100px text-center text-white py-1'
                subHeader={[
                  {
                    title: intl.formatMessage({id: 'MENU.TASK'}),
                    classNames:
                      'bg-pri align-middle text-center border border-left-0 border-right-0 border-bottom-0 border-white col-8 py-1',
                  },
                  {
                    title: intl.formatMessage({id: 'TASK.OFFICEHOURS'}),
                    classNames:
                      'bg-pri align-middle text-center border border-right-0 border-bottom-0 border-white col-2 py-1',
                  },
                  {
                    title: intl.formatMessage({id: 'TASK.OVERTIME'}),
                    classNames:
                      'bg-pri align-middle text-center border border-right-0 border-bottom-0 border-white col-2 py-1',
                  },
                ]}
              />
            )
          },
          id: `project${index}`,
          Cell: ({...props}) => {
            let item = props?.data?.[props.row.index]?.tasks?.[index]
            return (
              <TasksCustomProjectCell projectList={projectList} task={item}/>
            )
          },
        }
      })
    })
    .filter((column) => column !== undefined) as Column<TaskType>[]

  //loại bỏ trùng lặp column sau khi map 2 lần
  let UniqueFlexibleColumns = FlexibleColumns.filter(
    (column, index, self) => index === self.findIndex((c) => c.id === column.id)
  )
  const columns = useMemo(() => [...FixedColumns, ...UniqueFlexibleColumns], [taskData])

  const {getTableProps, getTableBodyProps, headers, rows, prepareRow} = useTable({
    columns,
    data: taskData,
  })


  return (
    <KTCardBody className='py-4' >
      <div className='table-responsive table-scroll-y' >
        <table
          id='kt_table_users'
          className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer table-layout-fixed'
          {...getTableProps()}
        >
          <thead className='bg-primary border border-gray-300 header-sticky' >
            <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
              {headers.map((column: ColumnInstance<TaskType>) => (
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
              rows.map((row: Row<TaskType>, i) => {
                prepareRow(row)
                const isDayOff = Boolean(row?.original?.dayOff)
                return <CustomRow isDayOff={isDayOff} row={row} key={`row-${i}-${row.id}`} />
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
      </div>
      <FooterTable
        handlePagesChange={handlePagesChange}
        handleRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPage={rowsPerPage}
        rowsForPage={[...ROWS_PER_PAGE_LIST, daysInMonth]}
        page={page}
        setPage={setPage}
        setRowsPerPage={setRowsPerPage}
        totalPages={totalPages}
        />
    </KTCardBody>
  )
}

export {TasksForEmployeeRoleTable}
