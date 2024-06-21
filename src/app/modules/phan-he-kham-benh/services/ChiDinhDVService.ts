import axios from "axios";

// const API_PATH_CIS = process.env.REACT_APP_API_URL + "/concept-answers";
const API_PATH_CIS = process.env.REACT_APP_CIS_API_URL;
const API_PATH_PMS = process.env.REACT_APP_PMS_API_URL;
const API_PATH_ADMIN = process.env.REACT_APP_ADMIN_API_URL;
const MOCK_API = "https://647f3a78c246f166da905f3b.mockapi.io";

export const searchByPage = (searchObject: any) => {
  let url = API_PATH_CIS + "/concept-answers/search";
  let config = {
    params: {
      // pageIndex: searchObject?.pageIndex,
      // pageSize: searchObject?.pageSize,
      // parentCode: searchObject?.parentCode,
      // conceptId: searchObject?.conceptId,
      parentId: searchObject?.parentId,
      conceptId: searchObject?.conceptId
    }
  }
  return axios.get(url, config);
};

export const getDSLoaiDichVu = (searchObject: any) => {
  let url = API_PATH_CIS + "/concepts/services/types/DSDV";
  return axios.get(url);
};

export const getDSNhomDichVu = (searchObject: any) => {
  let url = API_PATH_CIS + "/concept-answers/groups/" + searchObject?.parentCode;
  return axios.get(url);
};

export const getPhongThucHien = (searchObject: any) => {
  // let url = API_PATH_ADMIN + "/department/page";
  let url = API_PATH_ADMIN + "/room/page";
  return axios.get(url);
};

export const createDSChiDinhDV = (data: any, caseId: string) => {
  // let url = MOCK_API + "/benh-nhan";
  let url = API_PATH_PMS + "/thanh-toan/them-dich-vu/" + caseId;
  return axios.post(url, data);
};

export const updateDSChiDinhDV = (data: any, id: number | string | undefined) => {
  let url = MOCK_API + `/benh-nhan/${id}`;
  return axios.put(url, data);
};

export const deleteDSChiDinhDV = (id: number | string ) => {
  // let url = MOCK_API + `/benh-nhan/${id}`;
  let url = API_PATH_PMS + "/thanh-toan/xoa-dich-vu/" + id;
  return axios.delete(url);
};

export const getDSDVDaChiDinh = (caseId: string | number ) => {
  // let url = MOCK_API + `/benh-nhan?benhNhanId=${benhNhanId}`;
  let url = API_PATH_PMS + "/thanh-toan/dich-vu/" + caseId;
  return axios.get(url);
};
