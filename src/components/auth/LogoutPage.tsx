import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { logoutUser } from 'redux/auth/authSlice'
import { useAppDispatch } from 'redux/hooks'

const LogoutPage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(logoutUser())
    const id = setTimeout(() => navigate('/'), 2500)
    return () => clearTimeout(id)
  }, [dispatch, navigate])

  return <h2>You have logout with success</h2>
}

export default LogoutPage
