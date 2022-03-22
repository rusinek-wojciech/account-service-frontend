import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppSelector } from '../hooks'
import { User } from '../types'
import { login } from './authService'

interface AutoLogin {
  isLogged: boolean
  user?: User
}

/**
 * Hook is autologging user if token has changed and redirects
 */
const useAuthGuard = (): AutoLogin => {
  const { token, user } = useAppSelector((state) => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (!!token) {
      login()
        .then(() => navigate('/'))
        .catch((err: Error) => navigate('/error', { state: err }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  return { user, isLogged: !!user }
}

export default useAuthGuard
