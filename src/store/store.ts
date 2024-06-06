import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './counter/counter.slice'

export const store = configureStore({
    reducer: {
        notifications: notificationReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

/*
1. reducers are configured with initial setup
2. actions are created
3. components dispatched actions
4. actions are caught by reducers (which aare functions)
5. reducers change the state
6. components get the updated state (using selectors)
*/