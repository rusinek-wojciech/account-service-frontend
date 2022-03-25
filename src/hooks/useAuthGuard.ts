import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppSelector } from 'redux/hooks'
import { login } from 'services/authService'

/**
 * Hook is autologging user if token has changed and redirects
 */
const useAuthGuard = () => {
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
