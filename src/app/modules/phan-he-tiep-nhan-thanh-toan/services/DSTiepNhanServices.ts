import axios from "axios";
import { SearchObject } from "../models/DSTiepNhanModel";

const API_PATH = process.env.REACT_APP_PMS_API_URL;

export const searchByPage = (searchObject: SearchObject) => {
  const { pageIndex, pageSize, keyword } = searchObject;

  let url = API_PATH + "/benh-nhan";
  return axios.get(url, {
    params: {
      pageIndex,
      pageSize,
      keyword
    }
  });
};


