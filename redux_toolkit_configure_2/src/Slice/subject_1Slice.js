import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  physics: 0,
}

export const subject_1Slice = createSlice({
  name: 'subject_1',
  initialState,
  reducers: {
    increment: (state) => {
      state.physics += 1
    },
    decrement: (state) => {
      state.physics -= 1
    },
    incrementByAmount: (state, action) => {
      state.physics += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = subject_1Slice.actions

export default subject_1Slice.reducer