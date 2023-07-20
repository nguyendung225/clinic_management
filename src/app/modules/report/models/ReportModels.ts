export interface ProgressReport {
  reportId: string
  memberId: string
  projectId: string
  projectCode: string
  projectName: string
  memberName: string
  dateWorking: Date | null
  officeHour: number
  overtimeHour: number
  progress: number
}
export interface MemberProgress {
  memberId: string
  memberName: string
  projectProgresses: {
    projectId: string
    projectName: string
    progress: number
    projectCode: string
  }[]
}

export interface Week {
  startDate: string
  endDate: string
}
