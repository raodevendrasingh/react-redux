import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface NotificationState {
    count: number
}

// Define the initial state using that type
const initialState: NotificationState = {
    count: 0,
}

export const NotifcationSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        reset: (state) => {
            state.count = 0
        }
    },
})

export const { increment, reset } = NotifcationSlice.actions

export default NotifcationSlice.reducer