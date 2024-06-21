import axios from "axios";
import { IParamsProductType, IParamsSearchProduct, IParamsSimpleCategories } from "../models/Params";
import { paramsConfig } from "../../utils/ParamsUtils";

const APT_PATH = process.env.REACT_APP_PIS_API_URL;
export const getSimpleCategories = (searchObject: IParamsSimpleCategories) => {
    let url = APT_PATH + "/simple-categories/search";
    return axios.get(url, paramsConfig(searchObject));
}

export const getProductType = (searchObject: IParamsProductType) => {
    let url = APT_PATH + "/product-type/search";
    return axios.get(url, paramsConfig(searchObject));
}

export const getDanhSachVatTuHoaChat = (searchObject: IParamsSearchProduct) => {
    let url = APT_PATH + "/product/search";
    return axios.get(url, paramsConfig(searchObject));
}

export const getProductById = (id: string) => {
    let url = APT_PATH + "/product/" + id;
    return axios.get(url);
}

export const createProduct = (data: any) => {
    let url = APT_PATH + "/product";
    return axios.post(url, data);
}

export const updateProduct = (data: any) => {
    let url = APT_PATH + "/product/" + data?.id;
    return axios.put(url, data);
}

export const deleteProduct = (id: string) => {
    let url = APT_PATH + "/product/" + id;
    return axios.delete(url);
}
