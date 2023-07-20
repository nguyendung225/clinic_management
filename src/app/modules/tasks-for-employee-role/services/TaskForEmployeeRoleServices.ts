import axios from 'axios'

const API_PATH = process.env.REACT_APP_API_URL + '/api/v1/reports'

export const addTask = (object: object) => {
  let url = API_PATH
  return axios.post(url, object)
}

export const editTask = (id:string | undefined, object: object) => {
  let url = API_PATH + "/" + id
  return axios.put(url, object)
}

export const searchByPage = (
  startDate: string,
  endDate: string,
  pageIndex: number,
  pageSize: number
) => {
  let url =
    API_PATH +
    '/staff/page?startDate=' +
    startDate +
    '&endDate=' +
    endDate +
    '&pageIndex=' +
    pageIndex +
    '&pageSize=' +
    pageSize
  return axios.get(url)
}
