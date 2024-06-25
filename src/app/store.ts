import { configureStore } from '@reduxjs/toolkit'
import { Auth } from "../features/AuthSlice"
export const store = configureStore({
  reducer: {
    Auth: Auth 
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
