import axios from "axios";
import { benhNhan, SearchObject } from "../models/PhanHeTiepNhanModel";
import { paramsConfig, urlParamsConfig } from "../../utils/ParamsUtils";


const API_PATH_ADMINISTRATION = process.env.REACT_APP_ADMIN_API_URL;
const API_PATH_BENH_NHAN = process.env.REACT_APP_PMS_API_URL;
const API_PATH_CLINICAL = process.env.REACT_APP_CIS_API_URL;


export const searchByPage = (searchObject: SearchObject) => {
    let url = API_PATH_BENH_NHAN + "/employee/page";
    return axios.get(urlParamsConfig(url, searchObject));
};

export const getData = async (url: string) => {
    return axios.get(API_PATH_BENH_NHAN + url);
}

export const addBenhNhan = (data: any) => {
    return axios.post(API_PATH_BENH_NHAN + '/benh-nhan/tiep-nhan', data);
};

export const updateBenhNhan = (data: any) => {
    let url = API_PATH_BENH_NHAN + `/benh-nhan/${data?.id}`
    return axios.put(url, data);
};

export const getBenhNhan = (searchObject: any) => {
    let url = API_PATH_BENH_NHAN + '/benh-nhan';
    return axios.get(urlParamsConfig(url, searchObject));
}

export const getByIdBenhNhan = (id: string) => {
    let url = API_PATH_BENH_NHAN + `/benh-nhan/${id}`;
    return axios.get(url);
}

//Nationalities
export const getAllNation = (searchObject: any) => {
    let url = API_PATH_ADMINISTRATION + "/nationalities";
    return axios.get(urlParamsConfig(url, searchObject));
}

export const getAllProvince = (searchObject: any) => {
    let url = API_PATH_ADMINISTRATION + "/provinces";
    return axios.get(urlParamsConfig(url, searchObject));
}

export const getDistrictByProvinceId = (searchObject: any) => {
    let url = API_PATH_ADMINISTRATION + '/districts'
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


//Phong kham
export const getDSPhongKham = (searchObject: any) => {
    let url = API_PATH_ADMINISTRATION + '/room/page'
    return axios.get(url, paramsConfig(searchObject));
}

// Yêu cầu khám
export const getDanhSachYeuCauKham = () => {
    let url = API_PATH_CLINICAL + '/concepts/service/58'
    return axios.get(url)
}

//upload image
export const uploadImage = (patientId: string, formData: any) => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
    let url = API_PATH_BENH_NHAN + `/benh-nhan/avatar?patientId=${patientId}`;
    return axios.post(url, formData, config)
}

// lich sử khám
export const getListSu = (patientId: string) => {
    let url = API_PATH_CLINICAL + `/cases/lich-su-kham/${patientId}`
    return axios.get(url)
}

//Thông tin khám bệnh
export const getChiTietBenhNhan = (caseId: string, searchObject: any) => {
    let url = API_PATH_BENH_NHAN + `/benh-nhan/detail/${caseId}`
    return axios.get(url,paramsConfig(searchObject))
}

//DS tiếp nhận
export const getDSTiepNhan = (searchObject: any) => {
    let url = API_PATH_BENH_NHAN + '/benh-nhan/dang-kham';
    return axios.post(url,{}, paramsConfig(searchObject));
}


//FAKE API
const API_PATH_FAKE = "http://localhost:3000/"
export const addBenhNhanFake = (data: any) => {
    return axios.post(API_PATH_FAKE + 'tiep-nhan', data);
};
export const updateBenhNhanFake = (id: any,data: any) => {
    return axios.put(API_PATH_FAKE + 'tiep-nhan/'+ id, data);
};
export const getListBenhNhanFake = () => {
    return axios.get(API_PATH_FAKE + 'tiep-nhan');
};
export const getChiTietBenhNhanFake = (id: number, searchObject: any) => {
    let url = API_PATH_FAKE + `tiep-nhan/${id}`
    return axios.get(url,paramsConfig(searchObject))
}

export const deleteBenhNhanFake = (id: number) => {
    let url = API_PATH_FAKE + `tiep-nhan/${id}`
    return axios.delete(url)
}