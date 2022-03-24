import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '../../redux/hooks'
import { logoutUser } from '../authSlice'

const LogoutPage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(logoutUser())
    setTimeout(() => navigate('/'), 2500)
  }, [dispatch, navigate])
  return <h2>You have logout with success</h2>
}

export default LogoutPage
