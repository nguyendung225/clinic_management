import axios from "axios";

const API_PATH_CIS = process.env.REACT_APP_API_URL + "/concept-answers";
const API_PATH_PMS = process.env.REACT_APP_PMS_API_URL;
const API_PATH_ADMIN = process.env.REACT_APP_ADMIN_API_URL;
const MOCK_API = "https://647f3a78c246f166da905f3b.mockapi.io";

export const searchByPage = (searchObject: any) => {
  let url = API_PATH_CIS + "/search";
  let config = {
    params: {
      pageIndex: searchObject?.pageIndex,
      pageSize: searchObject?.pageSize,
      parentCode: searchObject?.parentCode,
      conceptId: searchObject?.conceptId,
    }
  }
  return axios.get(url, config);
};

export const getDSNhomDichVu = (searchObject: any) => {
  let url = API_PATH_CIS + "/groups/" + searchObject?.parentCode;
  return axios.get(url);
};

export const getPhongThucHien = (searchObject: any) => {
  let url = API_PATH_ADMIN + "/department/page";
  return axios.get(url);
};

export const createDSChiDinhDV = (data: any) => {
  let url = MOCK_API + "/benh-nhan";
  return axios.post(url, data);
};

export const updateDSChiDinhDV = (data: any, id: number| string | undefined) => {
  let url = MOCK_API + `/benh-nhan/${id}`;
  return axios.put(url, data);
};

export const deleteDSChiDinhDV = (id: number| string | undefined) => {
  let url = MOCK_API + `/benh-nhan/${id}`;
  return axios.delete(url);
};

export const getDSDVDaChiDinh = (benhNhanId: string | number | undefined) => {
  let url = MOCK_API + `/benh-nhan?benhNhanId=${benhNhanId}`;
  return axios.get(url);
};