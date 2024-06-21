import axios from "axios";
import { paramsConfig } from "../../utils/ParamsUtils";

const ADMIN = process.env.REACT_APP_ADMIN_API_URL;
const PMS_BENH_NHAN = process.env.REACT_APP_PMS_API_URL + "/benh-nhan";

export const getDSKhamBenh = (searchObject: any) => {
    let url = PMS_BENH_NHAN + "/get-by-phong-ban"
    return axios.get(url, paramsConfig(searchObject));
};
