import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
}

const foodDialogSlice = createSlice({
  name: 'foodDialog',
  initialState,
  reducers: {
    openFoodDialog: (state, action) => {
      state.isOpen = true
    },
    closeFoodDialog: (state, action) => {
      state.isOpen = false
    },
  },
})

export const { openFoodDialog, closeFoodDialog } = foodDialogSlice.actions

export default foodDialogSlice.reducer
