import { createSlice } from '@reduxjs/toolkit'
import { extraToppings } from '../../data/FoodData'

const initialState = {
  extraToppings: [...extraToppings],
}

const toppingsSlice = createSlice({
  name: 'toppings',
  initialState,
  reducers: {
    checkToppings: (state, action) => {
      state.extraToppings.map((topping) => {
        if (topping.id === action.payload.id) {
          topping.checked = !topping.checked
        }
        return topping
      })
    },
    resetToppings: (state) => {
      state.extraToppings = [...extraToppings]
    },
    addExtraToppings(state, action) {
      state.extraToppings = action.payload
    },
  },
})

export const { checkToppings, resetToppings } = toppingsSlice.actions
export default toppingsSlice.reducer
