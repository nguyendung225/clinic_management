import axios from "axios";
import { SearchObject } from "../models/DSTiepNhanModel";

// const API_PATH = process.env.REACT_APP_API_URL;
const API_PATH = "https://his-application.oceantech.com.vn/pms";

export const searchByPage = (searchObject: SearchObject) => {
    let config = {
        params: {
          pageIndex: searchObject?.pageIndex,
          pageSize: searchObject?.pageSize,
        }
    }
    let url = API_PATH + "/benh-nhan";
    return axios.get(url, config);
};


