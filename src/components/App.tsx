import { Route, Routes } from 'react-router-dom'

import AuthErrorPage from '../auth/components/AuthErrorPage'
import LoginPage from '../auth/components/LoginPage'
import Main from './Main'
import LogoutPage from '../auth/components/LogoutPage'
import SignUpPage from '../auth/components/SignUpPage'
import useAuthGuard from '../auth/useAuthGuard'

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
