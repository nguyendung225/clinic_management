import axios from "axios"
import {IPayloadData} from "../models/ModelDichVuGia"

const API_PATH = process.env.REACT_APP_CIS_API_URL

export const getAttributeType = async () => {
  const res = await axios.get(API_PATH + `/attribute-type/get-by-concept-id/43`)
  return res?.data?.data
}

export const getDanhSachLoaiDichVu = () => {
  return axios.get(API_PATH + `/concepts/services/types/DSDV`)
}

export const getDanhSachNhomDichVu = (idTypeService: number | string) => {
  return axios.get(API_PATH + `/concepts/service/groups/${idTypeService}`)
}

export const getDsByIdLoaiDichVu = (idTypeService: number | string, name: string, code: string) => {
  return axios.get(
    API_PATH +
      `/concept-answers/search?parentId=${idTypeService}&conceptAnswerName=${name}&code=${code}`
  )
}

export const addDichVuGia = (data: IPayloadData) => {
  return axios.post(API_PATH + "/concept-answers", data)
}

export const updateDichVuGia = (id: number | string, data: IPayloadData) => {
  return axios.put(API_PATH + `/concept-answers/${id}`, data)
}

export const deleteDichVuGia = (id: any) => {
  return axios.delete(API_PATH + `/concept-answers/${id}`)
}
