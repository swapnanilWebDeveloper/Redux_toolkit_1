import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  height : 0,
}

export const paramCSlice = createSlice({
  name: 'paramC',
  initialState,
  reducers: {
    increment: (state) => {
      state.height += 1
    },
    decrement: (state) => {
      state.height -= 1
    },
    incrementByAmount: (state, action) => {
      state.height += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = paramCSlice.actions

export default paramCSlice.reducer