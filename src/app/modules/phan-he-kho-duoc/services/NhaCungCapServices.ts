import axios from "axios";
import { IParamsSearchNhaCungCap } from "../../models/params";
import { INhaCungCap, IPayloadNhaCungCap } from "../models/NhaCungCapModel";
import { paramsConfig } from "../../utils/ParamsUtils";

const API_PATH = process.env.REACT_APP_PIS_API_URL;

export const getLoaiNhaCungCap = (type?: string | number) => {
  return axios.get(API_PATH + `/simple-categories/search?type=${type}`)
}

export const getListNhaCungCap = (params: IParamsSearchNhaCungCap) => {
  return axios.get(API_PATH + `/supplier/search`, paramsConfig(params))
}

export const getNhaCungCapById = (id: string) => {
  return axios.get(API_PATH + `/supplier/${id}`)
}

export const addNhaCungCap = (data: IPayloadNhaCungCap) => {
  return axios.post(API_PATH + `/supplier`, data)
}

export const updateNhaCungCap = (data: IPayloadNhaCungCap) => {
  return axios.put(API_PATH + `/supplier/${data?.id}`, data)
}

export const deleteNhaCungCap = (id: string) => {
  return axios.delete(API_PATH + `/supplier/${id}`)
}