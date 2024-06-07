import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface CounterState {
    count: number
}

const initialState: CounterState = {
    count: 0,
}

export const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        reset: (state) => {
            state.count = 0
        },
        decrement: (state) => {
            state.count -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.count += action.payload
        }
    },
})

export const { increment, reset, decrement, incrementByAmount } = CounterSlice.actions

export default CounterSlice.reducer