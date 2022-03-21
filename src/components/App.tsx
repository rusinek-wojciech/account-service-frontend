import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './LoginPage'
import LogoutPage from './LogoutPage'
import Main from './Main'
import SignUpPage from './SignUpPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/logout' element={<LogoutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
