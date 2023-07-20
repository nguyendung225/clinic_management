import axios from 'axios'
import {User} from '../models/UserModels'
const API_URL = process.env.REACT_APP_API_URL

const API_MAIN = `${API_URL}/api/v1`
export const getUsers = (page: number, rowOfPage: number, keyword: string = '') => {
  let url = `${API_MAIN}/users/page?pageIndex=${page}&pageSize=${rowOfPage}`
  if (keyword) {
    url += `&keyword=${keyword}`
  }
  return axios.get(url)
}
export const addUser = (user: User) => {
  return axios.post(`${API_MAIN}/users`, user)
}
export const updateUser = (user: User, id: number) => {
  return axios.put(`${API_MAIN}/users/${id}`, user)
}
export const deleteUser = (id: number) => {
  return axios.delete(`${API_MAIN}/users/${id}`, {})
}
