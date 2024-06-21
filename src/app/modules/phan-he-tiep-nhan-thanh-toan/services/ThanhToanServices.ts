import axios from "axios";

const API_PATH_BENH_NHAN = process.env.REACT_APP_PMS_API_URL;

//
export const getDsBenhNhanDangKham = (searchObject: any) => {
  return axios.post(API_PATH_BENH_NHAN + "/benh-nhan/dang-kham", null, {
    params: searchObject,
  });
};

export const getChiTietThanhToan = (objectId: object) => {
  let url = API_PATH_BENH_NHAN + `/thanh-toan/chi-tiet/`;
  return axios.get(url, { params: objectId });
};

export const createThanhToan = (searchObject: any) => {
  return axios.post(API_PATH_BENH_NHAN + "/thanh-toan", searchObject);
};

export const deleteDichVu = (id: string) => {
  return axios.delete(API_PATH_BENH_NHAN + "/thanh-toan/xoa-dich-vu/" + id);
};

export const getDataPhieu = (objectId: {
  idPhieu: string;
  personId: string;
}) => {
  return axios.get(
    API_PATH_BENH_NHAN +
      "/thanh-toan/" + objectId?.idPhieu
      // {
      //   params: {
      //     phieuId: objectId.idPhieu,
      //     personId: objectId.personId,
      //   },
      // }
  );
};
//
