import { ProjectType } from '../models/ProjectModels'
import {createContext} from 'react'

export type ProjectContextType = {
  handleEdit: (data: ProjectType) => void
  handleOpenConfirmDialog: (data: ProjectType) => void
}

export const ProjectContext = createContext<ProjectContextType>({
  handleEdit: (data: ProjectType) => {},
  handleOpenConfirmDialog: (data: ProjectType) => {}
})