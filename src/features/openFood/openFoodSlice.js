import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  openFood: null,
}

const openFoodSlice = createSlice({
  name: 'openFood',
  initialState,
  reducers: {
    setOpenFood: (state, action) => {
      state.openFood = action.payload
    },
    getPrice: (state) => {
      const extraToppingPrice = state.openFood.extraToppings
        ? state.openFood.extraToppings
            .map((topping) => {
              if (topping.checked) {
                return topping.price
              }
              return 0
            })
            .reduce((totalPrice, currentPrice) => {
              totalPrice += currentPrice
              return totalPrice
            }, 0)
        : 0
      state.openFood.totalPrice = state.openFood.price + extraToppingPrice
    },
    closeFood: (state) => {
      state.openFood = null
    },
  },
})

export const { setOpenFood, closeFood, getPrice } = openFoodSlice.actions
export default openFoodSlice.reducer
