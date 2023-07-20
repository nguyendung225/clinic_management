export interface Task {
  id?: string
  officeHour: number
  overtimeHour?: number
  projectId?: string
  project?: {
    id?: string
  }
  members?: {
    id?: string
  }
  taskOffice: string
  taskOverTime: string
}

export interface TaskType {
  id?: string
  dateWorking: string
  dayOff?: boolean 
  tasks?: {
    id?: string
    officeHour: number
    overtimeHour?: number
    projectId?: string
    project?:{
      id?: string
      code?: string
    }
    members?: {
      id?: string
    }
    taskOffice: string
    taskOverTime: string
  }[] | null | undefined
}
