import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getUsers } from '../services/userService'
import { User } from '../models/UserModels'

// Define a type for the slice state
type InitialState = {
  loading: boolean
  content: User[]
  totalPages: number
}
const initialState: InitialState = {
  loading: false,
  content: [],
  totalPages: 0,
}
interface Params {
  page: number,
  rowOfPage: number,
  keyword?: string
}
export const fetchUsers = createAsyncThunk('users/fetchUsers', async (params: Params, thunkAPI) => {
  const response = await getUsers(params.page, params.rowOfPage, params.keyword)
  return response.data.data
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true
    })
    builder.addCase(
        fetchUsers.fulfilled,
      (state, action: PayloadAction<InitialState>) => {
        state.loading = false
        state.content = action.payload.content
        state.totalPages = action.payload.totalPages
      }
    )
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false
      state.content = []
      state.totalPages = 0
    })
  }
})

export default userSlice.reducer