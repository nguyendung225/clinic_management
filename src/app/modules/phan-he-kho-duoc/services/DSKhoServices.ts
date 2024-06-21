import axios from "axios";
import { paramsConfig } from "../../utils/ParamsUtils";
import { ISearchCategories } from "../models/PhanHeKhoDuocModels";

const API_PATH_PIS = process.env.REACT_APP_PIS_API_URL;

export const searchWarehouse = (searchObject: ISearchCategories | any) => {
    let url = API_PATH_PIS + "/warehouses/search";
    return axios.get(url, paramsConfig(searchObject));
};

export const addWarehouse = (data: any) => {
    let url = API_PATH_PIS + "/warehouses";
    return axios.post(url, data);
};

export const updateWarehouse = (id: string, data: any) => {
    let url = API_PATH_PIS + `/warehouses/${id}`;
    return axios.put(url, data);
};

export const deleteWarehouse = (id: string | undefined) => {
    let url = API_PATH_PIS + `/warehouses/${id}`;
    return axios.delete(url);
};

export const getByIdWarehouse = (id: string | undefined) => {
    let url = API_PATH_PIS + `/warehouses/${id}`;
    return axios.get(url);
};

//loai kho
export const searchProductType = (searchObject: ISearchCategories | any) => {
    let url = API_PATH_PIS + "/product-type/search";
    return axios.get(url, paramsConfig(searchObject));
};