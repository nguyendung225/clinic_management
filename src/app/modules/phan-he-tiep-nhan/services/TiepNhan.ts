import axios from "axios";
import { benhNhan, SearchObject } from "../models/PhanHeTiepNhanModel";
import { urlParamsConfig } from "../../utils/ParamsUtils";


const API_PATH_ADMINISTRATION = process.env.REACT_APP_ADMIN_API_URL;
const API_PATH_BENH_NHAN = process.env.REACT_APP_PMS_API_URL;


export const searchByPage = (searchObject: SearchObject) => {
    let url = API_PATH_BENH_NHAN + "/employee/page";
    return axios.get(urlParamsConfig(url, searchObject));
};

export const getData = async (url: string) => {
    return axios.get(API_PATH_BENH_NHAN + url);
}

export const addBenhNhan= (data: benhNhan) => {
    return axios.post(API_PATH_BENH_NHAN + '/benh-nhan', data);
};

export const getBenhNhan = (searchObject: any) => {
    let url = API_PATH_BENH_NHAN + '/benh-nhan';
    return axios.get(urlParamsConfig(url, searchObject));
}


//Nationalities
export const getAllNation = (searchObject: any) => {
    let url = API_PATH_ADMINISTRATION + "/nationalities";
    return axios.get(urlParamsConfig(url, searchObject));
}

export const getAllProvince = (searchObject: any) => {
    let url = API_PATH_ADMINISTRATION + "/province";
    return axios.get(urlParamsConfig(url, searchObject));
}

export const getDistrictByProvinceId = (searchObject: any) => {
    let url = API_PATH_ADMINISTRATION + '/district'
    return axios.get(urlParamsConfig(url, searchObject));
}

export const getCommuneByDistrictId = (searchObject: any) => {
    let url = API_PATH_ADMINISTRATION + '/communes'
    return axios.get(urlParamsConfig(url, searchObject));
}

export const getAllCategory = (searchObject: any) => {
    let url = API_PATH_ADMINISTRATION + "/simple-category";
    return axios.get(urlParamsConfig(url, searchObject));
}

export const getAllJobs = (searchObject: any) => {
    let url = API_PATH_ADMINISTRATION + '/jobs'
    return axios.get(urlParamsConfig(url, searchObject));
}

//Phong kham
export const getDSPhongKham = (searchObject: any) => {
    let url = API_PATH_ADMINISTRATION + '/room/page'
    return axios.get(urlParamsConfig(url, searchObject));
}