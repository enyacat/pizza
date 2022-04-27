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
  },
})

export const { setChoiceValue } = choiceSlice.actions
export default choiceSlice.reducer
