import axios from "axios";
import { INhanVien } from "../models/ModelNhanVien";
import { IParamsSearchLocation, IParamsSearchNhanVien, IParamsSimpleCategory } from "../../models/params";

const API_URL = process.env.REACT_APP_ADMIN_API_URL;

export const getDanhSachKhoa = async () => {
    return axios.get(
        API_URL + `/department/page`)
}

export const getDanhSachPhong = async (id: string) => {
    return axios.get(API_URL + `/room/page?departmentId=${id}`);
}

export const getDanhSachRole = async () => {
    return axios.get(API_URL + "/roles");
}

export const getSimpleCategory = async (parameters: IParamsSimpleCategory) => {
    let config = {
        params: parameters
    }
    return axios.get(API_URL + "/simple-category", config);
}

export const getDanhSachLocation = async (parameters: IParamsSearchLocation) => {
    let config = {
        params: parameters
    }
    return axios.get(API_URL + "/location", config);
}

export const getDanhSachNhanVien = async (parameters: IParamsSearchNhanVien) => {
    let config = {
        params: parameters
    }
    return axios.get(API_URL + "/staff", config);
}

export const getNhanVienById = async (data: INhanVien) => {
    return axios.get(API_URL + "/staff/" + data.id);
}

export const createNhanVien = async (data: INhanVien) => {
    return axios.post(API_URL + "/staff", data);
}

export const updateNhanVien = async (data: INhanVien) => {
    return axios.put(API_URL + "/staff/" + data.id, data);
}

export const deleteNhanVien = async (data: INhanVien) => {
    return axios.delete(API_URL + "/staff/" + data.id);
}