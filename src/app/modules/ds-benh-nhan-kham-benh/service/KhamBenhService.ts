import axios from "axios";

const API_PATH_CONCEPTS = process.env.REACT_APP_API_URL + "/concepts/structures";

export const searchByPage = () => {
    let url = API_PATH_CONCEPTS + "/TTKB";
    return axios.get(url);
};
