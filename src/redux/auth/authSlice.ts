import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { User } from '../main/types'

const TOKEN_KEY = 'token'

interface AuthState {
  token?: string
  user?: User
}

const initialState: AuthState = {
  token: localStorage.getItem(TOKEN_KEY) ?? undefined,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) {
      const { email, password } = action.payload
      const token = btoa(`${email}:${password}`)
      localStorage.setItem(TOKEN_KEY, token)
      state.token = token
    },

    setLoggedUser(state, action: PayloadAction<User>) {
      state.user = action.payload
    },

    logoutUser(state) {
      localStorage.removeItem(TOKEN_KEY)
      state.user = undefined
      state.token = undefined
    },
  },
})

export const { setToken, setLoggedUser, logoutUser } = authSlice.actions

export default authSlice
