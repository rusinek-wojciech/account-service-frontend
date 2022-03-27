import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import Navbar from 'components/Navbar'
import { useAppSelector } from 'redux/hooks'
import { login } from 'services/authService'

const App = () => {
  const { token, user } = useAppSelector((state) => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (!!token) {
      login().catch((err) => navigate('/error', { state: err }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  const isLoading = !!token && !user
  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Navbar user={user} />
      <Outlet></Outlet>
    </>
  )
}

export default App
