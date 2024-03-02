import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  length : 0,
}

export const paramASlice = createSlice({
  name: 'paramA',
  initialState,
  reducers: {
    increment: (state) => {
      state.length += 1
    },
    decrement: (state) => {
      state.length -= 1
    },
    incrementByAmount: (state, action) => {
      state.length += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = paramASlice.actions

export default paramASlice.reducer