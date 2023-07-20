import {FC} from 'react'
import { Badge } from 'react-bootstrap'
import { useIntl } from 'react-intl'
import { ProjectType } from '../../../../projects/models/ProjectModels'
import { Task } from '../../../models/TaskModels'

type Props = {
  task: Task
  projectList: ProjectType[]
}
const TasksCustomProjectCell: FC<Props> = ({projectList, task}) => {
    const intl = useIntl()
    const searchProjectById = (id: string | undefined) => {
        const found = projectList?.find(item => item.id === id)
        return found?.code
      }
      let item = task
  return (
    <div className='d-flex align-items-center h-100 w-100 p-0'>
      <td className='border border-left-0 border-top-0 border-right-0 border-bottom-0 border-gray-200 col-8 p-3'>
        <div>
          <Badge pill className='bg-pri text-white mb-3'>
            {searchProjectById(item?.project?.id)}
          </Badge>
        </div>
        <b className='text-pri'>
          {item?.taskOffice && intl.formatMessage({id: 'TASK.OFFICEHOURS'}) + ':'}
        </b>
        <p className='wrap-line mb-3 ms-2'>{item?.taskOffice}</p>
        <b className='text-pri'>
          {item?.taskOverTime && intl.formatMessage({id: 'TASK.OVERTIME'}) + ':'}
        </b>
        <p className='wrap-line m-0 ms-2'>{item?.taskOverTime}</p>
      </td>
      <td className='text-center border-right-0 border-bottom-0 border-grey col-2 p-0 border-0'>
        {item?.officeHour ? item?.officeHour : null}
      </td>
      <td className='text-center border-right-0 border-bottom-0 border-grey col-2 p-0 border-0'>
        {item?.overtimeHour ? item?.overtimeHour : null}
      </td>
    </div>
  )
}

export {TasksCustomProjectCell}
