import axios from "axios";
import { IObjectSearchPhieuNhapKho, IObjectSearchProduct, IPhieuNhapKhoPayload } from "../models/NhapKhoModels";
import { paramsConfig } from "../../utils/ParamsUtils";

const API_PATH = process.env.REACT_APP_PIS_API_URL;

export const getListProduct = (params: IObjectSearchProduct) => {
  return axios.get(API_PATH + `/product/search`, paramsConfig(params))
}

export const getListPhieuNhapKho = (params: IObjectSearchPhieuNhapKho) => {
  return axios.get(API_PATH + `/inventory/in/search`, paramsConfig(params))
}

export const getPhieuNhapKhoById = (id: string) => {
  return axios.get(API_PATH + `/inventory/in/${id}`)
}

export const addPhieuNhapKho = (data: IPhieuNhapKhoPayload) => {
  return axios.post(API_PATH + `/inventory/in`, data)
}

export const updatePhieuNhapKho = (data: IPhieuNhapKhoPayload) => {
  return axios.put(API_PATH + `/inventory/in/${data?.id}`, data)
}

export const deletePhieuNhapKho = (id: string) => {
  return axios.delete(API_PATH + `/inventory/in/${id}`)
}

export const getLotId = (id: string) => {
  return axios.get(API_PATH + `/warehouse-lots/search?warehouseId=${id}`)
}
