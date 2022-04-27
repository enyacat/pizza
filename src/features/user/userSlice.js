import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  myUser: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setMyUser: (state, action) => {
      state.myUser = action.payload
    },
  },
})

export const { setMyUser } = userSlice.actions
export default userSlice.reducer
