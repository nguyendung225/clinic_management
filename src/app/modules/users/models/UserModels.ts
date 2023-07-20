export type Gender = 1 | 2 | 3
export type User = {
  id?: number
  displayName: string
  username: string
  gender: Gender
  email: string
  setPassword?: boolean
  password?: string
  oldPassword?: string
  confirmPassword?: string
  active: boolean
  justCreated: boolean
  roles?: string[]
  accountNonLocked: boolean
  accountNonExpired: boolean
  credentialsNonExpired: boolean
}
export interface GenderObject {
  id: number
  name: string
  description: string
}
export interface RoleObject {
  id: number
  name: string
  description: string
  orgId: null | string
  authorities: []
}
export interface MultiSelect {
  name: string
  label: string
  options: RoleObject[]
}
export interface UsersDialogProps {
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
  shouldOpenUsersDialog: boolean
  handleCloseUserDialog: () => void
  updateData: () => void
}
export interface Options {
  value: string
  label: string
  isDisabled?: boolean
}
export type UserTableProps = {
  state: boolean
  keyword: string
}
