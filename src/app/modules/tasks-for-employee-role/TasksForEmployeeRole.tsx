import {useEffect, useState} from 'react'
import {Col, Row, Spinner} from 'react-bootstrap'
import {useIntl} from 'react-intl'
import {TasksForEmployeeRoleTable} from './components/table/TasksForEmployeeRoleTable'
import {TasksForEmployeeRolesDialog} from './components/TasksForEmployeeRoleDialog'
import './tasks-for-employee-role.scss'
import {TaskForEmployeeRoleContext} from './services/TaskForEmployeeRoleContext'
import {TaskType} from './models/TaskModels'
import {ToastContainer, toast} from 'react-toastify'
import {searchByPage} from './services/TaskForEmployeeRoleServices'
import {searchByPage as searchProjectList} from '../projects/services/ProjectServices'
import moment from 'moment'
import {ProjectType} from '../projects/models/ProjectModels'
import BreadcrumbsWidget from '../../../_metronic/partials/widgets/breadCrumbs/BreadCrumbsWidget'
import { handleMoveMonthClick } from '../utils/PageUtils'
import { 
  DEFAULT_PAGE_INDEX, 
  DEFAULT_PAGE_SIZE, 
  DEFAULT_TOTAL_PAGES, 
  MAX_PAGE_SIZE 
} from '../category-personnel/const/PersonnelConst'

const TasksForEmployeeRole = () => {
  const intl = useIntl()
  const items = [
    {text: intl.formatMessage({id: 'MENU.TASK'}), url: '/task/employee'},
    {text: intl.formatMessage({id: 'MENU.TASK.EMPLOYEE'}), url: '/task/employee'},
  ]
  const [state, setState] = useState<boolean>(false)
  const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState<boolean>(false)
  const [currentDate, setCurrentDate] = useState<Date>(new Date())
  const [month, setMonth] = useState<number>(currentDate.getMonth() + 1)
  const [year, setYear] = useState<number>(currentDate.getFullYear())
  const formatDate = `${month.toString().padStart(2, '0')}/${year}`
  const daysInMonth = moment(`${year}-${month}`, 'YYYY-MM').daysInMonth()
  const [projectList, setProjectList] = useState<ProjectType[]>([])

  const [page, setPage] = useState<number>(DEFAULT_PAGE_INDEX)
  const [rowsPerPage, setRowsPerPage] = useState<number>(DEFAULT_PAGE_SIZE)
  const [totalPages, setTotalPages] = useState<number>(DEFAULT_TOTAL_PAGES)

  const [loading, setLoading] = useState<boolean>(false)
  const [taskData, setTaskData] = useState<TaskType[]>([])
  const [task, setTask] = useState<TaskType>({
    dateWorking: moment(new Date()).format('yyyy-MM-DD'),
    dayOff: false,
    tasks: [
      {
        officeHour: 0,
        overtimeHour: 0,
        taskOffice: '',
        taskOverTime: '',
        project: {
          id: '',
        },
      },
    ],
  })
  const [totalOfficeHours, setTotalOfficeHours] = useState<number>(0)
  const [totalOvertimeHours, setTotalOvertimeHours] = useState<number>(0)

  const handleOpenEditorDialog = (data: TaskType): void => {
    setShouldOpenEditorDialog(true)
    setTask(data)
  }
  const handleCloseEditorDialog = (): void => {
    setShouldOpenEditorDialog(false)
  }

  const totalHoursCalc = (data: TaskType[]) => {
    let totalOfficeH: number = 0
    let totalOvertimeH: number = 0
    data?.forEach((pItem) => {
      pItem.tasks?.forEach((item) => {
        if (item?.overtimeHour) {
          totalOvertimeH += item.overtimeHour
        }
        if (item?.officeHour) {
          totalOfficeH += item.officeHour
        }
      })
    })
    setTotalOfficeHours(totalOfficeH / 8 || 0)
    setTotalOvertimeHours(totalOvertimeH / 8 || 0)
  }

  const searchProjects = () => {
    let keyword = ''
    searchProjectList(keyword, DEFAULT_PAGE_INDEX, MAX_PAGE_SIZE).then(({data}) => {
      setProjectList(data.data.content)
    })
  }

  const getAllItem = () => {
    setLoading(true)
    const date = moment(`${month}/${year}`, 'MM/YYYY').toDate()
    const start = moment(date).startOf('month').format('YYYY-MM-DD')
    const end = moment(date).endOf('month').format('YYYY-MM-DD')
    searchByPage(start, end, page, rowsPerPage)
      .then(({data}) => {
        setTaskData(data.data.content)
        setTotalPages(data.data.totalPages)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        toast.error(intl.formatMessage({id: 'TOAST.GET.ERROR'}))
      })
  }

  const getAllItemAndCalculateTotalHours = () => {
    const date = moment(`${month}/${year}`, 'MM/YYYY').toDate()
    const start = moment(date).startOf('month').format('YYYY-MM-DD')
    const end = moment(date).endOf('month').format('YYYY-MM-DD')
    searchByPage(start, end, DEFAULT_PAGE_INDEX, daysInMonth)
      .then(({data}) => {
        totalHoursCalc(data.data.content)
      })
  }

  const updatePageData = () => {
    getAllItem()
    getAllItemAndCalculateTotalHours()
  }

  useEffect(() => {
    updatePageData()
  }, [state, page, rowsPerPage])

  useEffect(() => {
    setPage(DEFAULT_PAGE_INDEX)
    setTotalPages(DEFAULT_TOTAL_PAGES)
    setRowsPerPage(DEFAULT_PAGE_SIZE)
    updatePageData()
  }, [month]);

  useEffect(() => {
    searchProjects()
  }, [])

  return (
    <TaskForEmployeeRoleContext.Provider value={{handleOpenEditorDialog, taskData, projectList}}>
      <BreadcrumbsWidget items={items}></BreadcrumbsWidget>
      <Row className='d-flex justify-content-between mt-5'>
        <Col xs={6} className='d-flex align-items-center fs-5'>
          <b
            className='previous-button'
            onClick={() => {
              handleMoveMonthClick(true, month, setMonth, year, setYear)
            }}
          >
            {'<<'}
          </b>
          <b className='mx-4 text-pri'>
            {intl.formatMessage({id: 'TASK.MONTH'}) + ' ' + formatDate}
          </b>
          <b
            className='next-button'
            onClick={() => {
              handleMoveMonthClick(false, month, setMonth, year, setYear)
            }}
          >
            {'>>'}
          </b>
        </Col>
        <Col xs={6} className='d-flex justify-content-end align-items-center fs-6'>
          <div className='d-flex align-items-center'>
            <b>{intl.formatMessage({id: 'TASK.TOTAL.WORKDAY.OFFICEHOUR'}) + ': '}</b>
            {loading ? (
              <Spinner animation='border' variant='dark' className='ms-1' size='sm' />
            ) : (
              <b className='ms-1'>{parseFloat(totalOfficeHours.toFixed(4))}</b>
            )}
          </div>
          <div className='ms-5 d-flex align-items-center'>
            <b>{intl.formatMessage({id: 'TASK.OVERTIME'}) + ':'}</b>
            {loading ? (
              <Spinner animation='border' variant='dark' className='ms-1' size='sm' />
            ) : (
              <b className='ms-1'>{parseFloat(totalOvertimeHours.toFixed(4))}</b>
            )}
          </div>
        </Col>
      </Row>

      {shouldOpenEditorDialog && (
        <TasksForEmployeeRolesDialog
          data={task}
          show={shouldOpenEditorDialog}
          onClose={handleCloseEditorDialog}
          state={state}
          setState={setState}
          projectList={projectList}
        />
      )}

      <TasksForEmployeeRoleTable
        taskData={taskData}
        state={state}
        loading={loading}
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        totalPages={totalPages}
        setTotalPages={setTotalPages}
        projectList={projectList}
        daysInMonth={daysInMonth}
      />
    </TaskForEmployeeRoleContext.Provider>
  )
}

export {TasksForEmployeeRole}
