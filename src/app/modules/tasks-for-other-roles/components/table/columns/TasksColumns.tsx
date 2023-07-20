/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/rules-of-hooks */
import {Column} from 'react-table'
import {useIntl} from 'react-intl'
import {TaskType} from '../../../models/TaskModels'
import {TasksCustomHeader} from './TasksCustomHeader'
import moment from 'moment'
import {useLang} from '../../../../../../_metronic/i18n/Metronici18n'

const totalHoursCalc = (data: TaskType) => {
  let total = 0
  data?.tasks?.map((item) => {
    if(item?.overtimeHour){
      total += item?.officeHour + item?.overtimeHour
    }else{
      total += item?.officeHour
    }
  })
  return total
}

const isSunday = (day: Date) => {
  if (new Date(day).getDay() === 0) {
    return true
  }
  return false
}

const isSaturday = (day: Date) => {
  if (new Date(day).getDay() === 6) {
    return true
  }
  return false
}

let FixedColumns: ReadonlyArray<Column<TaskType>> = [
  {
    Header: (props) => (
      <TasksCustomHeader
        tableProps={props}
        title={useIntl().formatMessage({id: 'TASK.DATE'})}
        className='align-middle w-120px text-center text-white position-sticky top-0 start-0'
      />
    ),
    id: 'date',
    Cell: ({...props}) => {
      const lang = useLang()
      const weekdays =
        lang === 'en'
          ? ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
          : ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7']
      moment.updateLocale(lang, {weekdaysShort: weekdays})
      let dateWorking = props.data[props.row.index].dateWorking
      return (
        <div
          className={
            isSunday(dateWorking)
              ? 'text-start text-danger px-4 py-3 h-100'
              : isSaturday(dateWorking) 
              ? 'text-start text-success px-4 py-3 h-100' 
              : 'text-start text-pri px-4 py-3 h-100'
          }
        >
          {moment(dateWorking).format('DD/MM ddd')}
        </div>
      )
    },
  },
  {
    Header: (props) => (
      <TasksCustomHeader
        tableProps={props}
        title={useIntl().formatMessage({id: 'TASK.MEMBER.FULLNAME'})}
        className='align-middle w-150px text-center text-white p-0 position-sticky top-0 start-120'
      />
    ),
    id: 'members',
    Cell: ({...props}) => {
      let member = props?.data?.[props.row.index]?.member
      return (
        <div className='text-start px-3'>
          {member?.name}
        </div>
      )
    },
  },
  {
    Header: (props) => (
      <TasksCustomHeader
        tableProps={props}
        title={useIntl().formatMessage({id: 'TASK.TOTALHOURS'})}
        className='align-middle w-100px text-center text-white p-0 position-sticky top-0 start-270'
      />
    ),
    id: 'totalHours',
    Cell: ({...props}) => {
      let totalHours = totalHoursCalc(props.data[props.row.index])
      return (
        props.data[props.row.index]?.dayOff 
          ? <div className='text-center px-4'>{useIntl().formatMessage({id: 'TASK.DAYOFF'})}</div>
          : <div className='text-center px-4 bg-white'>{totalHours !== 0 && totalHours}</div>
      )
    },
  },
]

export {FixedColumns}
