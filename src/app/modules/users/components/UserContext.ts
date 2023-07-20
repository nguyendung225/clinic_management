import {createContext} from 'react'
import { User } from '../models/UserModels'
export type UserContextType = {
  handleEditUser: (data: User) => void,
  handleDeleteUser: (data: User) => void
}
export const UserContext = createContext<UserContextType>({
  handleEditUser: (data: User) => {},
  handleDeleteUser: (data: User) => {},
})