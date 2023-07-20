import React, {FC, useState, useEffect} from 'react'
import {useIntl} from 'react-intl'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import './component/report.scss'
import {ProgressReport, MemberProgress, Week} from './models/ReportModels'
import {FooterTable} from '../component/FooterTable'
import {getListUserProgress} from './services/ReportService'
import moment from 'moment'
import BreadcrumbsWidget from '../../../_metronic/partials/widgets/breadCrumbs/BreadCrumbsWidget'
import {handlePagesChange} from '../utils/PageUtils'
import {ROW_FOR_PAGE} from '../users/const/UserConst'
import {handleMoveMonthClick, handleRowsPerPageChange} from '../utils/PageUtils'
import {Tooltip, OverlayTrigger, Spinner} from 'react-bootstrap'
import { MONTH_ACTIVE_BUTTON } from './const/ReportConst'
import { 
  DEFAULT_PAGE_INDEX, 
  DEFAULT_PAGE_SIZE, 
  DEFAULT_TOTAL_PAGES 
} from '../category-personnel/const/PersonnelConst'
const Report: FC = () => {
  const intl = useIntl()
  const breakCrumb = [
    {text: intl.formatMessage({id: 'MENU.REPORT'}), url: '/report'},
    {text: intl.formatMessage({id: 'MENU.REPORT'}), url: '/report'},
  ]
  const [activeButton, setActiveButton] = useState<number>(MONTH_ACTIVE_BUTTON)
  const [data, setData] = useState<MemberProgress[]>([])
  const [page, setPage] = useState<number>(DEFAULT_PAGE_INDEX)
  const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_PAGE_SIZE)
  const [totalPages, setTotalPages] = useState<number>(DEFAULT_TOTAL_PAGES)
  const [loading, setLoading] = useState(false);

  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')
  const currentDate = new Date()
  const [month, setMonth] = useState<number>(currentDate.getMonth() + 1)
  const [year, setYear] = useState<number>(currentDate.getFullYear())
  const [weeks, setWeeks] = useState<Week[]>([])
  const updateData = () => {
    setLoading(true)
    getListUserProgress(page, rowsPerPage, {startDate, endDate}).then((response) => {
      if (response.data && response.data.data && response.data.data.totalPages) {
        setTotalPages(response.data.data.totalPages)
      }
      let data = response.data.data.content
      setData(data)
      setLoading(false)
    })
  }
  useEffect(() => {
    updateData()
  }, [])
  useEffect(() => {
    updateData()
  }, [page, rowsPerPage, startDate, endDate, month, year])
  useEffect(() => {
    const firstDayOfMonth = moment(`${year}-${month}-01`)
    const firstSundayOfMonth = firstDayOfMonth.clone().startOf('month').day(0).add(1, 'day')
    if (firstSundayOfMonth.isAfter(firstDayOfMonth)) {
      firstSundayOfMonth.subtract(7, 'days')
    }
    const firstWeekEndDate = firstSundayOfMonth.clone().add(6, 'day')
    const weeks: Week[] = [
      {
        startDate: firstSundayOfMonth.format('YYYY-MM-DD'),
        endDate: firstWeekEndDate.format('YYYY-MM-DD'),
      },
    ]
    let startDate = firstWeekEndDate.clone().add(1, 'day')
    while (startDate.clone().add(6, 'day').month() === month - 1) {
      const endDate = startDate.clone().add(6, 'day')
      weeks.push({
        startDate: startDate.format('YYYY-MM-DD'),
        endDate: endDate.format('YYYY-MM-DD'),
      })
      startDate = endDate.clone().add(1, 'day')
    }
    setWeeks(weeks)
    handleMonthClick()
  }, [month, year])

  const handleButtonClick = (week: any) => {
    setStartDate(week.startDate)
    setEndDate(week.endDate)
  }
  const formattedDate = `${month.toString().padStart(2, '0')}/${year}`
  const handleMonthClick = () => {
    setActiveButton(MONTH_ACTIVE_BUTTON)
    const startDate = `${year}-${month.toString().padStart(2, '0')}-01`
    const endDate = `${year}-${month.toString().padStart(2, '0')}-${new Date(year, month, 0)
      .getDate()
      .toString()
      .padStart(2, '0')}`
    setStartDate(startDate)
    setEndDate(endDate)
  }
  return (
    <>
      <BreadcrumbsWidget items={breakCrumb}></BreadcrumbsWidget>
      <div className=' mb-6 mt-4'>
        <h2>{intl.formatMessage({id: 'REPORT.TIMEFORPROJECT'})}</h2>
        <div className='d-flex justify-content-center gap-4'>
          <h1
            className='bi bi-arrow-left-square-fill cursorPointer'
            onClick={() => {
              handleMoveMonthClick(true, month, setMonth, year, setYear)
            }}
          ></h1>
          <h1>{formattedDate}</h1>
          <h1
            className='bi bi-arrow-right-square-fill cursorPointer'
            onClick={() => {
              handleMoveMonthClick(false, month, setMonth, year, setYear)
            }}
          ></h1>
        </div>
      </div>
      <div className='row d-flex justify-content-between'>
        <div className='col-7 row gap-2'>
          <ButtonGroup>
            {weeks.map((week, index) => (
              <div
                className='col align-items-center d-flex flex-column justify-content-center'
                key={index}
              >
                <ToggleButton
                  className='btn border-button ps-9 pe-9'
                  type='radio'
                  variant={activeButton === index ? 'outline-primary' : 'outline-secondary'}
                  name='radio'
                  value={index}
                  checked={activeButton === index}
                  onClick={(e) => {
                    setActiveButton(index)
                    handleButtonClick(week)
                  }}
                >
                  {intl.formatMessage({id: 'REPORT.WEEK'})} {index + 1}
                </ToggleButton>
                <span className=''>
                  ({moment(week.startDate).format('DD/MM')}-{moment(week.endDate).format('DD/MM')})
                </span>
              </div>
            ))}
            <div className='col ms-2'>
              <ToggleButton
                className='border-button ps-10 pe-10'
                type='radio'
                variant={activeButton === MONTH_ACTIVE_BUTTON ? 'outline-primary' : 'outline-secondary'}
                name='radio'
                value={MONTH_ACTIVE_BUTTON}
                checked={activeButton === MONTH_ACTIVE_BUTTON}
                onClick={(e) => {
                  setActiveButton(MONTH_ACTIVE_BUTTON)
                  handleMonthClick()
                }}
              >
                {intl.formatMessage({id: 'REPORT.MONTH'})}
              </ToggleButton>
            </div>
          </ButtonGroup>
        </div>
        <div className='col-5 row'>
          <div className='col-sm-6'>
            <div className='form-group row'>
              <label className='col-sm-4 col-form-label fontBold text-end pe-0' htmlFor='startDate'>
                {intl.formatMessage({id: 'DATE.FROM'})}
              </label>
              <div className='col-sm-8'>
                <input
                  className='form-control'
                  type='date'
                  id='startDate'
                  name='startDate'
                  value={startDate}
                  onChange={(event) => setStartDate(event.target.value)}
                  max={endDate}
                />
              </div>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='form-group row'>
              <label className='col-sm-4 col-form-label fontBold text-end pe-0' htmlFor='endDate'>
                {intl.formatMessage({id: 'DATE.TO'})}
              </label>
              <div className='col-sm-8'>
                <input
                  className='form-control'
                  type='date'
                  id='endDate'
                  name='endDate'
                  value={endDate}
                  onChange={(event) => setEndDate(event.target.value)}
                  min={startDate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='position-relative'>
        {loading && (
          <div className='loading-table'>
            <Spinner animation='border' variant='primary' />
          </div>
        )}
        <div className='mt-5 me-3 ms-3'>
          {data.length !== 0 ? (
            data.map((user) => (
              <div className='row d-flex justify-content-end mb-1 process'>
                <div className='col-2 process-header fs-6 '>{user.memberName}</div>
                <div className='col-10 d-flex p-0'>
                  {user.projectProgresses.map((item, index) => (
                    <OverlayTrigger
                      placement='top'
                      key={item.projectId}
                      overlay={<Tooltip id='tooltip'>{item.projectName}</Tooltip>}
                    >
                      <div
                        className={`color-index-${index} process-data d-flex align-item-center`}
                        style={{flex: `${(item.progress / 100) * 100}%`}}
                      >
                        {item.projectCode} {item.progress}%
                      </div>
                    </OverlayTrigger>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className='d-flex justify-content-center no-data'>
              {!loading && intl.formatMessage({id: 'TABLE.DATA.EMPTY'})}
            </div>
          )}
        </div>
      </div>
      <FooterTable
        handlePagesChange={handlePagesChange}
        handleRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPage={rowsPerPage}
        rowsForPage={ROW_FOR_PAGE}
        page={page}
        setPage={setPage}
        setRowsPerPage={setRowsPerPage}
        totalPages={totalPages}
      ></FooterTable>
    </>
  )
}
export {Report}
