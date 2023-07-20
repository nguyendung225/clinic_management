import axios from "axios";
import { ProjectType, SearchObject } from "../models/ProfileModels";

const API_PATH = process.env.REACT_APP_API_URL;

export const searchByPage = (searchObject: SearchObject) => {
    let config = {
        params: {
          pageIndex: searchObject?.pageIndex,
          pageSize: searchObject?.pageSize,
          keyword: searchObject?.keyword,
          code: searchObject?.code,
          name: searchObject?.name,
          gender: searchObject?.gender,
          birthdate: searchObject?.birthdate,
          phone: searchObject?.phone,
          emailCaNhan: searchObject?.emailCaNhan,
          phongBan: searchObject?.phongBan,
          viTriCongViecText: searchObject?.viTriCongViecText,
          chucVuText: searchObject?.chucVuText,
        }
    }
    let url = API_PATH + "/employee/page";
    return axios.get(url, config);
};

export const deleteProfile = (listID: []) => {    
    let url = API_PATH + `/employee/list-employee-id/?id=${listID}`;
    return axios.delete(url);
}

export const getById = (id: string | undefined) => {
  let url = API_PATH + "/" + id;
  return axios.get(url);
};

export const addProject = (data: ProjectType) => {
    return axios.post(API_PATH + '', data);
};

export const editProject = (id: string | undefined, data: ProjectType) => {
  let url = API_PATH + "/" + id;
  return axios.put(url, data);
};

export const deleteProject = (id: string | undefined) => {
  let url = API_PATH + "/" + id;
  return axios.delete(url);
};

export const getAllEthnics = () => {
    let url = API_PATH + "/cEthnics";
    return axios.get(url)
}

export const getAllReligion = () => {
    let url = API_PATH + "/cSimpleCategoryAttributeValue"
    return axios.get(url)
}

export const getAllNation = () => {
    let url = API_PATH + "/cNationality"
    return axios.get(url)
}

export const getAllProvince = () => {
    let url = API_PATH + "/province"
    return axios.get(url)
}

export const getAllDistrict = () => {
    let url = API_PATH + "/district"
    return axios.get(url)
}

export const getAllCommune = () => {
    let url = API_PATH + "/subdistrict"
    return axios.get(url)
}

export const getDistrictByProvince = (idProvince: string) => {
    let url = API_PATH + "/district/get-by-province/" + idProvince
    return axios.get(url)
}

export const getCommuneByDistrict = (idDistrict: string) => {
    let url = API_PATH + "/subdistrict/get-by-district/" + idDistrict
    return axios.get(url)
}

export const getAllSimpleValue = (type: number) => {
    let url = API_PATH + `/cSimpleCategoryAttributeValue/page/?type=${type}`
    return axios.get(url)
}

export const getAllDonVi = () => {
    let url = API_PATH + '/cDonVi'
    return axios.get(url)
}

export const getAllDepartment = () => {
    let url = API_PATH + '/department'
    return axios.get(url)
}

export const getAlSimpleValue = () => {
    let url = API_PATH + '/cSimpleCategoryAttributeValue'
    return axios.get(url)
}

export const getAllKhauTru = () => {
    let url = API_PATH + '/khauTru/page'
    return axios.get(url)
}

export const getAllPhuCap = () => {
    let url = API_PATH + '/phuCap/page'
    return axios.get(url)
}

export const handleAddOrUpdate = (object: object, typeSubmit: string) => {
    let url = API_PATH + '/' + typeSubmit
    return axios.post(url, object)
}