import { ProjectType } from "../../projects/models/ProjectModels"
import { TaskType } from "../models/TaskModels"
import {createContext} from 'react'

export type TaskForEmployeeRoleContextType = {
  handleOpenEditorDialog: (data: TaskType) => void
  taskData: TaskType[]
  projectList: ProjectType[]
}

export const TaskForEmployeeRoleContext = createContext<TaskForEmployeeRoleContextType>({
  handleOpenEditorDialog: (data: TaskType) => {},
  taskData: [],
  projectList: []
})