import { useEffect, useState } from 'react'
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap'
import { useIntl } from 'react-intl'
import { TasksForOtherRolesTable } from './components/table/TasksForOtherRolesTable'
import './tasks-for-other-roles.scss'
import { TaskForOtherRolesContext } from './services/TaskForOtherRolesContext'
import { TaskType } from './models/TaskModels'
import { toast } from 'react-toastify'
import { exportToExcel, searchByPage } from './services/TaskForOtherRolesServices'
import moment from 'moment'
import { ProjectType } from '../projects/models/ProjectModels'
import BreadcrumbsWidget from '../../../_metronic/partials/widgets/breadCrumbs/BreadCrumbsWidget'
import { getListTeam, getListMember } from '../category-personnel/services/PategoryPersonnelServices'
import { searchByPage as searchProject } from '../projects/services/ProjectServices'
import { MemberData, TeamData } from '../category-personnel/model/PersonnelModel'
import { 
  DEFAULT_PAGE_INDEX, 
  DEFAULT_PAGE_SIZE, 
  DEFAULT_TOTAL_PAGES, MAX_PAGE_SIZE 
} from '../category-personnel/const/PersonnelConst'
import { hasAuthority } from '../utils/Permission'

const TasksForOtherRoles = () => {
  const intl = useIntl()
  const items = [
    { text: intl.formatMessage({ id: 'MENU.TASK' }), url: '/task/others' },
    { text: intl.formatMessage({ id: 'MENU.TASK.OTHER' }), url: '/task/others' },
  ]
  const [state, setState] = useState<boolean>(false)
  const [currentDate, setCurrentDate] = useState<Date>(new Date())
  const [month, setMonth] = useState<number>(currentDate.getMonth() + 1)

  const [projectList, setProjectList] = useState<ProjectType[]>([])
  const [projectId, setProjectId] = useState<string>('')
  const [memberList, setMemberList] = useState<MemberData[]>([])
  const [memberId, setMemberId] = useState<string>('')
  const [teamList, setTeamList] = useState<TeamData[]>([])
  const [teamId, setTeamId] = useState<string>('')

  const [page, setPage] = useState<number>(DEFAULT_PAGE_INDEX)
  const [rowsPerPage, setRowsPerPage] = useState<number>(DEFAULT_PAGE_SIZE)
  const [totalPages, setTotalPages] = useState<number>(DEFAULT_TOTAL_PAGES)
  const [loading, setLoading] = useState<boolean>(false)
  const [exportToExcelLoading, setExportToExcelLoading] = useState<boolean>(false)
  const [taskData, setTaskData] = useState<TaskType[]>([])

  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')

  const getAllProject = () => {
    let keyword = ''
    searchProject(keyword, DEFAULT_PAGE_INDEX, MAX_PAGE_SIZE).then(({ data }) => {
      setProjectList(data.data.content)
    })
  }

  const getAllTeam = () => {
    getListTeam(DEFAULT_PAGE_INDEX, MAX_PAGE_SIZE).then(({ data }) => {
      setTeamList(data.data.content)
    })
  }

  const getAllMember = () => {
    getListMember(teamId, DEFAULT_PAGE_INDEX, MAX_PAGE_SIZE).then(({ data }) => {
      setMemberList(data.data.content)
    })
  }

  const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e?.target
    if (name === 'startDate') {
      setStartDate(value)
    }
    if (name === 'endDate') {
      setEndDate(value)
    }
  }

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let { name, value } = e?.target
    if (name === 'team') {
      setTeamId(value)
    }
    if (name === 'member') {
      setMemberId(value)
    }
  }

  const getAllItem = (startDate: string, endDate: string) => {
    setLoading(true)
    searchByPage(startDate, endDate, teamId, memberId, page, rowsPerPage)
      .then(({ data }) => {
        setTaskData(data.data.content)
        setTotalPages(data.data.totalPages)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        toast.error(intl.formatMessage({ id: 'TOAST.GET.ERROR' }))
      })
  }

  const updatePageData = () => {
    if (startDate.trim() === '' && endDate.trim() === '') {
      const date = moment(month, 'MM/YYYY').toDate()
      const start = moment(date).startOf('month').format('YYYY-MM-DD')
      const end = moment(date).endOf('month').format('YYYY-MM-DD')
      setStartDate(start)
      setEndDate(end)
      getAllItem(start, end)
    } else {
      getAllItem(startDate, endDate)
    }
  }

  const searchMemberById = (id: string) => {
    let member = memberList.find(item => item?.id === id)
    return member
  }

  const searchTeamById = (id: string) => {
    let team = teamList.find(item => item?.id === id)
    return team
  }

  const handleExportToExcel = () => {
    setExportToExcelLoading(true)
    let member = searchMemberById(memberId)
    let team = searchTeamById(teamId)
    let fileName = `Task Reports ${
      startDate !== endDate ? `${startDate + ' - ' + endDate}` : `${startDate}`
      }${
      (teamId !== '' && memberId === '') 
        ? ` ${team?.name}` 
        : memberId !== '' 
        ? ` ${member?.team?.name} ${member?.name}` 
        : ''
    }.xlsx`;
    exportToExcel(startDate, endDate, page, rowsPerPage, teamId, memberId)
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', fileName)
        document.body.appendChild(link)
        link.click()
        setExportToExcelLoading(false)
        toast.success(intl.formatMessage({id: 'EXPORT.SUCCESS'}))
      })
      .catch((err) => {
        toast.error(err.message)
        setExportToExcelLoading(false)
      })
  }

  useEffect(() => {
    updatePageData()
  }, [state, page, rowsPerPage])

  useEffect(() => {
    setPage(DEFAULT_PAGE_INDEX)
    setTotalPages(DEFAULT_TOTAL_PAGES)
    setRowsPerPage(DEFAULT_PAGE_SIZE)
    updatePageData()
  }, [month, startDate, endDate, projectId, teamId, memberId])

  useEffect(() => {
    getAllTeam()
    getAllProject()
  }, [])

  useEffect(() => {
    setMemberId('')
    getAllMember()
  }, [teamId])

  return (
    <TaskForOtherRolesContext.Provider value={{ taskData }}>
      {exportToExcelLoading && (
        <div className='loading-full-screen'>
          <Spinner animation='border' variant='primary' className='spinner-lg' />
        </div>
      )}
      <BreadcrumbsWidget items={items}></BreadcrumbsWidget>
      <Row className='d-flex justify-content-between mt-5'>
        <Col xs={2}>
          <label htmlFor='startDate'>
            <b>{intl.formatMessage({ id: 'TASK.DATE.FROM' })}</b>
          </label>
          <Form.Control
            name='startDate'
            type='date'
            placeholder='DD/MM/YYYY'
            value={startDate}
            max={endDate}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeDate(e)}
          />
        </Col>
        <Col xs={2}>
          <label htmlFor='endDate'>
            <b>{intl.formatMessage({ id: 'TASK.DATE.TO' })}</b>
          </label>
          <Form.Control
            name='endDate'
            type='date'
            placeholder='DD/MM/YYYY'
            value={endDate}
            min={startDate}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeDate(e)}
          />
        </Col>
        <Col xs={2}>
          <label htmlFor='team'>
            <b>{intl.formatMessage({ id: 'MENU.CATEGORY.PERSONNEL.TEAM' })}</b>
          </label>
          <Form.Select
            name='team'
            id='team'
            className='form-control form-select'
            value={teamId}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleSelect(e)}
          >
            <option value={''}>
              {intl.formatMessage({ id: 'ECOMMERCE.COMMON.ALL' }) +
                ' ' +
                intl.formatMessage({ id: 'MENU.CATEGORY.PERSONNEL.TEAM' }).toLowerCase()}
            </option>
            {teamList?.map((item: TeamData, index) => {
              return (
                <option key={index} value={item?.id}>
                  {item?.name}
                </option>
              )
            })}
          </Form.Select>
        </Col>
        <Col xs={3}>
          <label htmlFor='member'>
            <b>{intl.formatMessage({ id: 'TASK.MEMBER' })}</b>
          </label>
          <Form.Select
            name='member'
            id='member'
            className='form-control'
            value={memberId}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleSelect(e)}
          >
            <option value={''}>
              {intl.formatMessage({ id: 'ECOMMERCE.COMMON.ALL' }) +
                ' ' +
                intl.formatMessage({ id: 'TASK.MEMBER' }).toLowerCase()}
            </option>
            {memberList?.map((item: MemberData, index) => {
              return (
                <option key={index} value={item?.id}>
                  {item?.name}
                </option>
              )
            })}
          </Form.Select>
        </Col>
        <Col xs={3} className='d-flex align-items-end justify-content-end'>
          {hasAuthority('REPORT.EXPORT') &&
            <Button className='bg-pri' onClick={() => handleExportToExcel()}>
              {intl.formatMessage({ id: 'TASK.EXCEL' })}
            </Button>}
        </Col>
      </Row>

      <TasksForOtherRolesTable
        taskData={taskData}
        projectList={projectList}
        state={state}
        loading={loading}
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        totalPages={totalPages}
        setTotalPages={setTotalPages}
      />
    </TaskForOtherRolesContext.Provider>
  )
}

export { TasksForOtherRoles }
