import axios from "axios";

const API_URL = process.env.REACT_APP_ADMIN_API_URL;

export const getDanhSachTaiKhoan = async (parameters: any) => {
    let config = {
        params: parameters
    }
    return axios.get(API_URL + "/users", config);
}