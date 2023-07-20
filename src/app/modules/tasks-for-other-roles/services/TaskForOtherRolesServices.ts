import axios from 'axios'

const API_PATH = process.env.REACT_APP_API_URL + '/api/v1/reports'

export const searchByPage = (
  startDate: string,
  endDate: string,
  teamId: string,
  memberId: string,
  pageIndex: number,
  pageSize: number
) => {
  let url =
    API_PATH +
    '/page?startDate=' +
    startDate +
    '&endDate=' +
    endDate +
    '&teamId=' +
    teamId +
    '&memberId=' +
    memberId +
    '&pageIndex=' +
    pageIndex +
    '&pageSize=' +
    pageSize
  return axios.get(url)
}

export const exportToExcel = (
  startDate: string,
  endDate: string,
  pageIndex: number,
  pageSize: number,
  teamId: string,
  memberId: string,
) => {
  let url = 
    API_PATH + 
    '/export-excel?startDate=' + 
    startDate + 
    '&endDate=' + 
    endDate + 
    '&pageIndex=' + 
    pageIndex + 
    '&pageSize=' +
    pageSize + 
    '&teamId=' + 
    teamId + 
    '&memberId=' + 
    memberId
  return axios.get(url, {
    responseType: 'blob',
  })
}
