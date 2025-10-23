import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState { value: number }
const initialState: CounterState = { value: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: s => { s.value += 1 },
    decrement: s => { s.value -= 1 },
    incrementByAmount: (s, a: PayloadAction<number>) => { s.value += a.payload },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;