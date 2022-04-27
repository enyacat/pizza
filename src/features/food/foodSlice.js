import { createSlice } from '@reduxjs/toolkit'
import { useState } from 'react'
import { foodItems } from '../../data/FoodData'

const initialState = {
  foodItems: foodItems,
}

const [openFood, setOpenFood] = useState()

const foodSlice = createSlice({
  name: 'food',
  initialState,
})

export default foodSlice.reducer
