import {Task} from '../models/TaskModels'

export const ROWS_PER_PAGE_LIST = [1, 2, 3, 5, 10, 15, 20]

export const INIT_TASK: Task = {
  officeHour: 0,
  overtimeHour: 0,
  taskOffice: '',
  taskOverTime: '',
  project: {
    id: '',
  },
}
