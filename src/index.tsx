import { StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'

import './index.css'
import { store } from './redux/store'
import App from './components/App'
import AdminPanel from './components/AdminPanel'
import AuthErrorPage from './components/AuthErrorPage'
import LoginPage from './components/LoginPage'
import LogoutPage from './components/LogoutPage'
import SignUpPage from './components/SignUpPage'
import HomePage from './components/HomePage'
import EmptyPage from './components/EmptyPage'

render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='' element={<HomePage />} />
            <Route path='admin' element={<AdminPanel />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='signup' element={<SignUpPage />} />
            <Route path='logout' element={<LogoutPage />} />
            <Route path='error' element={<AuthErrorPage />} />
          </Route>
          <Route path='*' element={<EmptyPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)
