import axios from "axios"
import { IDepartment, IRoom } from "../models/ModelKhoaPhong"
import { paramsConfig } from "../../utils/ParamsUtils"

const API_PATH = process.env.REACT_APP_ADMIN_API_URL

export const getListDepartment = (page: number, rowPerPage: number) => {
  return axios.get(
    API_PATH + `/department/page?code=&name=&pageIndex=${page}&pageSize=${rowPerPage}`
  )
}
export const getDepartmentById = (id: string) => {
  return axios.get(API_PATH + `/department/${id}`)
}

export const addDepartment = (data: IDepartment) => {
  return axios.post(API_PATH + "/department", data)
}

export const updateDepartment = (data: IDepartment) => {
  return axios.put(API_PATH + "/department/" + data.id, data)
}

export const deleteDepartment = (id: string) => {
  return axios.delete(API_PATH + "/department/" + id)
}

// Room
export const getListRoom = (id: string) => {
  return axios.get(API_PATH + `/room/page?code=&departmentId=${id}`)
}

export const addRoom = (data: IRoom) => {
  return axios.post(API_PATH + "/room", data)
}

export const updateRoom = (data: IRoom) => {
  return axios.put(API_PATH + "/room/" + data.id, data)
}

export const deleteRoom = (id: string) => {
  return axios.delete(API_PATH + "/room/" + id)
}

export const getPriceType = () => {
  return axios.get(API_PATH + "/simple-category?type=17")
}

export const getDanhSachKhoa = async () => {
  const url = API_PATH + '/department/page';
  return axios.get(url)
}

export const getDanhSachPhong = async (searchObject: any) => {
  const url = API_PATH + `/room/page`;
  return axios.get(url, paramsConfig(searchObject));
}