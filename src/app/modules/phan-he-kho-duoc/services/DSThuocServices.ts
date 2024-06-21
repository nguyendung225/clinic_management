import axios from "axios";
import { paramsConfig } from "../../utils/ParamsUtils";
const API_PATH_PIS = process.env.REACT_APP_PIS_API_URL;
export const searchByPage = (searchObject: any) => {
  let url = API_PATH_PIS + "/product/search";
  return axios.get(url, paramsConfig(searchObject));
};

export const getListCategory = (searchObject:any) => {
  let url = API_PATH_PIS + "/simple-categories/search";
  return axios.get(url, paramsConfig(searchObject));
};

export const getListType = (searchObject:any) => {
  let url = API_PATH_PIS + "/product-type/search";
  return axios.get(url, paramsConfig(searchObject));
};

export const addDSThuoc = (data: any) => {
  let url = API_PATH_PIS + "/product";
  return axios.post(url, data);
};

export const editDSThuoc = (data: any, id: string) => {
  let url = API_PATH_PIS + `/product/${id}`;
  return axios.put(url, data);
};

export const deleteDSThuoc = ( id: string) => {
  let url = API_PATH_PIS + `/product/${id}`;
  return axios.delete(url);
};
