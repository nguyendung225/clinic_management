import axios from "axios";
import { urlParamsConfig } from "../../utils/ParamsUtils";

const API_PATH_ADMINISTRATION = process.env.REACT_APP_ADMIN_API_URL;
export const getAllNation = (searchObject: any) => {
  let url = API_PATH_ADMINISTRATION + "/nationalities";
  return axios.get(urlParamsConfig(url, searchObject));
};

export const getAllProvince = (searchObject: any) => {
  let url = API_PATH_ADMINISTRATION + "/provinces";
  return axios.get(urlParamsConfig(url, searchObject));
};

export const getDistrictByProvinceId = (searchObject: any) => {
  let url = API_PATH_ADMINISTRATION + "/districts";
  return axios.get(urlParamsConfig(url, searchObject));
};

export const getCommuneByDistrictId = (searchObject: any) => {
  let url = API_PATH_ADMINISTRATION + "/communes";
  return axios.get(urlParamsConfig(url, searchObject));
};

export const getAllCategory = (searchObject: any) => {
  let url = API_PATH_ADMINISTRATION + "/simple-category";
  return axios.get(urlParamsConfig(url, searchObject));
};
