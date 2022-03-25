import { Route, Routes } from 'react-router-dom'

import useAuthGuard from '../hooks/useAuthGuard'
import AuthErrorPage from './AuthErrorPage'
import LoginPage from './LoginPage'
import LogoutPage from './LogoutPage'
import Main from './Main'
import SignUpPage from './SignUpPage'

const App = () => {
  useAuthGuard()

  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/logout' element={<LogoutPage />} />
      <Route path='/error' element={<AuthErrorPage />} />
    </Routes>
  )
}

export default App
