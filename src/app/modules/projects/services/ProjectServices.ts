import axios from "axios";
import { ProjectType } from "../models/ProjectModels";

const API_PATH = process.env.REACT_APP_API_URL + "/api/v1/projects";

export const searchByPage = (keyword: string, pageIndex: number, pageSize: number) => {
    let url = API_PATH + "/page?pageIndex=" + pageIndex + "&pageSize=" + pageSize + "&keyword=" + keyword;
    return axios.get(url);
};

export const getById = (id: string | undefined) => {
    let url = API_PATH + "/" + id;
    return axios.get(url);
};

export const addProject = (data: ProjectType) => {
    return axios.post(API_PATH, data);
};

export const editProject = (id: string | undefined, data: ProjectType) => {
    let url = API_PATH + "/" + id;
    return axios.put(url, data);
};

export const deleteProject = (id: string | undefined) => {
    let url = API_PATH + "/" + id;
    return axios.delete(url);
};