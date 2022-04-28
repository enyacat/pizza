import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  choiceValue: '',
}

const choiceSlice = createSlice({
  name: 'choice',
  initialState,
  reducers: {
    setChoiceValue: (state, action) => {
      state.choiceValue = action.payload
    },
    resetChoiceValue: (state) => {
      state.choiceValue = ''
    },
  },
})

export const { setChoiceValue, resetChoiceValue } = choiceSlice.actions
export default choiceSlice.reducer
