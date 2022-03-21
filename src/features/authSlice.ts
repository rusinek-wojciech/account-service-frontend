import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../types'

const USER_KEY = 'user'
const TOKEN_KEY = 'token'

interface AuthState {
  token?: string
  user?: User
}

const initialState: AuthState = {
  token: localStorage.getItem(TOKEN_KEY) ?? undefined,
  user: JSON.parse(localStorage.getItem(USER_KEY) as string),
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
      const user = action.payload
      localStorage.setItem(USER_KEY, JSON.stringify(user))
      state.user = user
    },

    logoutUser(state) {
      localStorage.removeItem(USER_KEY)
      localStorage.removeItem(TOKEN_KEY)
      state.user = undefined
      state.token = undefined
    },
  },
})

export const { setToken, setLoggedUser, logoutUser } = authSlice.actions
export default authSlice.reducer
