import { createSlice } from '@reduxjs/toolkit'
import { foodItems } from '../../data/FoodData'

const allSections = ['all', ...new Set(foodItems.map((item) => item.section))]

const initialState = {
  sections: allSections,
  foodItems: foodItems,
  itemsBySection: foodItems,
  foodsObject: {},
}

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    filterItems: (state, action) => {
      const section = action.payload
      if (section === 'all') {
        state.itemsBySection = [...state.foodItems]
      } else {
        const tempItems = [...state.foodItems]
        state.itemsBySection = tempItems.filter(
          (item) => item.section === section
        )
      }
    },
    organiseBySection: (state, action) => {
      state.foodsObject = state.itemsBySection.reduce((res, food) => {
        if (!res[food.section]) {
          res[food.section] = []
        }
        res[food.section].push(food)
        return res
      }, {})
    },
  },
})

export const { filterItems, organiseBySection } = menuSlice.actions
export default menuSlice.reducer
