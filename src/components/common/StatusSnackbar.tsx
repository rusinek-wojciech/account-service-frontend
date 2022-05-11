import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { closeSnackbar } from 'redux/app/appSlice'

const defaultDuration = 5000

const StatusSnackbar = () => {
  const dispatch = useAppDispatch()
  const { message, isOpen, color } = useAppSelector(
    (state) => state.app.snackbar
  )

  const handleClose = () => dispatch(closeSnackbar())

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={defaultDuration}
      onClose={handleClose}
      message={message}
      action={
        <>
          <IconButton
            size='small'
            aria-label='close'
            color={color}
            onClick={handleClose}
          >
            <CloseIcon fontSize='small' />
          </IconButton>
        </>
      }
    />
  )
}

export default StatusSnackbar
