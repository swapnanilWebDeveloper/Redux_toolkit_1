import { createSlice } from '@reduxjs/toolkit'

const initialState = {
      chemistry: 0,
}

export const subject_2Slice = createSlice({
  name: 'subject_2',
  initialState,
  reducers: {
    increment: (state) => {
        state.chemistry += 1
    },
    decrement: (state) => {
        state.chemistry -= 1
    },
    incrementByAmount: (state, action) => {
        state.chemistry += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = subject_2Slice.actions

export default subject_2Slice.reducer