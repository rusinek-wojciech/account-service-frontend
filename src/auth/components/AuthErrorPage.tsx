import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useAppDispatch } from '../../hooks'
import { ErrorResponse } from '../../types'
import { logoutUser } from '../authSlice'

/**
 * Log out when redirected here
 */
const AuthErrorPage = () => {
  const { state } = useLocation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(logoutUser())
  }, [dispatch])

  const { status, error, message, timestamp, path } = state as ErrorResponse

  return (
    <div>
      <h2>Error</h2>
      <p>{`Status: ${status} ${error}`}</p>
      <p>{`Message: ${message}`}</p>
      <p>{`Timestamp: ${timestamp}`}</p>
      <p>{`Path: ${path}`}</p>
      <Link to='/'>
        <button>Go back</button>
      </Link>
    </div>
  )
}

export default AuthErrorPage
