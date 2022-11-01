import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { User } from 'redux/main/types'
import { LocalStorageKey } from 'services/localstorage/types'
import {
  getStringLocalStorage,
  removeLocalStorage,
  setStringLocalStorage,
} from 'services/localstorage/utils'

interface AuthState {
  token: string | null
  user: User | null
}

const initialState: AuthState = {
  token: getStringLocalStorage(LocalStorageKey.TOKEN),
  user: null,
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
      setStringLocalStorage(LocalStorageKey.TOKEN, token)
      state.token = token
    },

    setLoggedUser(state, action: PayloadAction<User>) {
      state.user = action.payload
    },

    logoutUser(state) {
      removeLocalStorage(LocalStorageKey.TOKEN)
      state.user = null
      state.token = null
    },
  },
})

export const { setToken, setLoggedUser, logoutUser } = authSlice.actions

export default authSlice
