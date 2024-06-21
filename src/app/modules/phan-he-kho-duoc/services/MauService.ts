import axios from "axios";
import { paramsConfig } from "../../utils/ParamsUtils";
import { ISearchCategories } from "../models/PhanHeKhoDuocModels";

const API_PATH_PIS = process.env.REACT_APP_PIS_API_URL;

export const searchMau = (searchObject: ISearchCategories | any) => {
    let url = API_PATH_PIS + "/product/search";
    return axios.get(url, paramsConfig(searchObject));
};
