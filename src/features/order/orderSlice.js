import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  order: {},
  quantity: 1,
  // isEditing: false,
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    generateOrder: (state, action) => {
      state.order = action.payload
    },
    increaseQuantity: (state) => {
      state.quantity = state.quantity + 1
    },
    decreaseQuantity: (state) => {
      if (state.quantity > 1) {
        state.quantity = state.quantity - 1
      }
    },
    changeInputQuantity: (state, action) => {
      state.quantity = action.payload
    },
    resetQuantity: (state) => {
      state.quantity = 1
    },
  },
})

export const {
  generateOrder,
  increaseQuantity,
  decreaseQuantity,
  changeInputQuantity,
  resetQuantity,
  editOrder,
} = orderSlice.actions
export default orderSlice.reducer
