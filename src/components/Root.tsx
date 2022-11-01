import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from 'redux/store'
import AdminPanel from 'components/admin/AdminPanel'
import Layout from 'components/Layout'
import Login from 'components/auth/Login'
import Logout from 'components/auth/Logout'
import SignUp from 'components/auth/SignUp'
import Empty from 'components/special/Empty'
import Error from 'components/special/Error'
import Home from 'components/Home'
import Auth from 'components/auth/Auth'
import EventPanel from 'components/auditor/EventPanel'
import { Role } from 'redux/main/types'

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route
              path=''
              element={
                <Auth>
                  <Home />
                </Auth>
              }
            />
            <Route
              path='admin'
              element={
                <Auth allowedRoles={[Role.ADMINISTRATOR]}>
                  <AdminPanel />
                </Auth>
              }
            />
            <Route
              path='auditor'
              element={
                <Auth allowedRoles={[Role.AUDITOR]}>
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
  )
}

export default Root
