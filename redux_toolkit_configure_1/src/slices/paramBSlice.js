import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  breadth : 0,
}

export const paramBSlice = createSlice({
  name: 'paramB',
  initialState,
  reducers: {
    increment: (state) => {
      state.breadth += 1
    },
    decrement: (state) => {
      state.breadth -= 1
    },
    incrementByAmount: (state, action) => {
      state.breadth += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = paramBSlice.actions

export default paramBSlice.reducer