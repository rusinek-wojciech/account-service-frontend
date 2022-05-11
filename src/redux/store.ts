import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

import mainApi from 'redux/main/mainApi'
import appSlice from 'redux/app/appSlice'
import authSlice from 'redux/auth/authSlice'

export const store = configureStore({
  reducer: {
    [mainApi.reducerPath]: mainApi.reducer,
    [appSlice.name]: appSlice.reducer,
    [authSlice.name]: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware),
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
