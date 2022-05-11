import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type SnackbarColor =
  | 'error'
  | 'default'
  | 'success'
  | 'primary'
  | 'secondary'
  | 'info'
  | 'warning'

interface AppState {
  snackbar: {
    isOpen: boolean
    message: string
    color: SnackbarColor
  }
}

const initialState: AppState = {
  snackbar: {
    isOpen: false,
    message: '',
    color: 'default',
  },
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    closeSnackbar(state) {
      state.snackbar.isOpen = false
      state.snackbar.message = ''
    },
    openSnackbar(
      state,
      action: PayloadAction<{ message: string; color: SnackbarColor }>
    ) {
      const { color, message } = action.payload
      state.snackbar.isOpen = true
      state.snackbar.message = message
      state.snackbar.color = color
    },
  },
})

export const { closeSnackbar, openSnackbar } = appSlice.actions

export default appSlice
