import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

/*
1. reducers are configured with initial setup
2. actions are created
3. components dispatched actions
4. actions are caught by reducers (which aare functions)
5. reducers change the state
6. components get the updated state (using selectors)
*/