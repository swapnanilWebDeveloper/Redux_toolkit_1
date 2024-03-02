import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mathematics: 0,
}

export const subject_3Slice = createSlice({
  name: 'subject_3',
  initialState,
  reducers: {
    increment: (state) => {
      state.mathematics += 1
    },
    decrement: (state) => {
      state.mathematics -= 1
    },
    incrementByAmount: (state, action) => {
      state.mathematics += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = subject_3Slice.actions

export default subject_3Slice.reducer