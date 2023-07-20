import { TaskType } from "../models/TaskModels"
import {createContext} from 'react'

export type TaskForOtherRolesContextType = {
  taskData: TaskType[]
}

export const TaskForOtherRolesContext = createContext<TaskForOtherRolesContextType>({
  taskData: [],
})