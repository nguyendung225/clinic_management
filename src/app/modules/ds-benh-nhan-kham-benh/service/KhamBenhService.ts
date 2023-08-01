import axios, { AxiosResponse } from "axios";
import { IBenhNhanResponse, IUpdateStatusResponse } from "../models/DSBenhNhanKhamBenhModels";
import { searchPatientParams, updatePatientStatusParams } from "../models/IParams";
import { urlParamsConfig } from "../../utils/ParamsUtils";

const BASE_URL = process.env.REACT_APP_API_URL;
const API_PATH_CONCEPTS = BASE_URL + "/concepts/structures";
const API_PATH_ENCOUNTERS = BASE_URL + "/encounters";

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