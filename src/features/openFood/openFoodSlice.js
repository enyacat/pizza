import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  openFood: null,
  price: 0,
}

const openFoodSlice = createSlice({
  name: 'openFood',
  initialState,
  reducers: {
    setOpenFood: (state, action) => {
      state.openFood = action.payload
    },
    getPrice: (state, action) => {
      const extraToppingPrice = state.openFood.extraToppings
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

      state.openFood.price = state.openFood.price + extraToppingPrice
    },
    closeFood: (state, action) => {
      state.openFood = null
    },
  },
})

export const { setOpenFood, closeFood, getPrice } = openFoodSlice.actions
export default openFoodSlice.reducer
