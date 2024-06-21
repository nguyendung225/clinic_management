import axios, { AxiosResponse } from "axios";
import { IBenhNhanResponse, IUpdateStatusResponse } from "../models/DSBenhNhanKhamBenhModels";
import { searchPatientParams, updatePatientStatusParams } from "../models/IParams";
import { paramsConfig, urlParamsConfig } from "../../utils/ParamsUtils";
import { iCreateEncounter } from "../models/ThongTinKhamBenhModel";

const BASE_URL = process.env.REACT_APP_API_URL;
const API_PATH_CONCEPTS = BASE_URL + "/concepts/structures";
const API_PATH_ENCOUNTERS = BASE_URL + "/encounters";
const CIS_ENCOUNTERS = process.env.REACT_APP_CIS_API_URL + "/encounters";
const CIS = process.env.REACT_APP_CIS_API_URL;

export const searchByPage = () => {
  let url = API_PATH_CONCEPTS + "/TTKB";
  return axios.get(url);
};

export const encountersApi = {
  searchPatient: (
    searchObj: searchPatientParams
  ): Promise<AxiosResponse<IBenhNhanResponse>> => {
    let url: string = API_PATH_ENCOUNTERS + `/search`;
    return axios.get(urlParamsConfig(url, searchObj));
  },
  updateStatus: (params: updatePatientStatusParams): Promise<AxiosResponse<IUpdateStatusResponse>> => {
    let url: string = API_PATH_ENCOUNTERS + '/update-status';
    return axios.post(url, params);
  }
};

export const createEncounter = (data: iCreateEncounter) => {
  let url = CIS_ENCOUNTERS + "/kham-benh"
  return axios.post(url, data)
}

export const getKhamBenh = (searchObject: any) => {
  let url = CIS + "/obs/diagnosis-detail"
  return axios.get(url, paramsConfig(searchObject))
}

export const createKhamBenh = (data: any) => {
  let url = CIS + "/obs/diagnosis"
  return axios.post(url, data)
}

export const updateKhamBenh = (data: any) => {
  let url = CIS + "/obs/diagnosis/edit";
  return axios.put(url, data);
}

export const getLoaiBenh = (searchObject: any) => {
  let url = CIS + "/concepts/icd10";
  return axios.get(url, paramsConfig(searchObject));
}

export const getLichSuKham = (searchObject: any) => {
  let url = CIS + "/encounters/history";
  return axios.get(url, paramsConfig(searchObject));
}

export const getDSXuTri = () => {
  let url = CIS + "/concepts/xu-tri";
  return axios.get(url);
}