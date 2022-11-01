import { Outlet } from 'react-router-dom'

import Navbar from 'components/Navbar'
import StatusSnackbar from 'components/common/StatusSnackbar'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
      <StatusSnackbar />
    </>
  )
}

export default Layout
