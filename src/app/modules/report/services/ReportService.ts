import axios from 'axios'
const API_URL = process.env.REACT_APP_API_URL

const API_MAIN = `${API_URL}/api/v1`
export const getListUserProgress = (
  page: number,
  rowOfPage: number,
  date: {
    startDate: string
    endDate: string
  }
) => {
  return axios.get(
    `${API_MAIN}/progress/page?pageIndex=${page}&pageSize=${rowOfPage}&startDate=${date.startDate}&endDate=${date.endDate}`
  )
}
