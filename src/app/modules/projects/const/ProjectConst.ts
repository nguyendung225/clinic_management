import { ProjectType } from "../models/ProjectModels"

export const ROWS_PER_PAGE_LIST = [1, 2, 3, 5, 10, 15, 20, 50, 100]

export const PROJECT_STATUS = [
  {
    //đang làm
    value: "WORKING",
    title: 'CATEGORY.PROJECT.STATUS.WORKING',
  },
  {
    //tạm dừng
    value: "PENDING",
    title: 'CATEGORY.PROJECT.STATUS.PENDING',
  },
  {
    //hoàn thành
    value: "FINISH",
    title: 'CATEGORY.PROJECT.STATUS.FINISH',
  },
]

export const INIT_PROJECT: ProjectType = {
  code: '',
  name: '',
  status: '',
  description: '',
}
