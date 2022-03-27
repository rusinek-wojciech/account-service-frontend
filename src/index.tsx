import { StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'

import 'index.css'
import { store } from 'redux/store'
import AdminPanel from 'components/admin/AdminPanel'
import App from 'components/App'
import Login from 'components/auth/Login'
import Logout from 'components/auth/Logout'
import SignUp from 'components/auth/SignUp'
import Empty from 'components/special/Empty'
import Error from 'components/special/Error'
import Home from 'components/Home'
import Auth from 'components/auth/Auth'
import EventPanel from 'components/auditor/EventPanel'

render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='' element={<Home />} />
            <Route
              path='admin'
              element={
                <Auth roles={['ADMINISTRATOR']}>
                  <AdminPanel />
                </Auth>
              }
            />
            <Route
              path='auditor'
              element={
                <Auth roles={['AUDITOR']}>
                  <EventPanel />
                </Auth>
              }
            />
            <Route path='login' element={<Login />} />
            <Route path='sign-up' element={<SignUp />} />
            <Route path='logout' element={<Logout />} />
            <Route path='error' element={<Error />} />
          </Route>
          <Route path='*' element={<Empty />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)
