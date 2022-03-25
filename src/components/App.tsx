import { Outlet } from 'react-router-dom'

import Navbar from 'components/Navbar'
import useAuthGuard from 'hooks/useAuthGuard'
import { useAppSelector } from 'redux/hooks'

const App = () => {
  const { user } = useAppSelector((state) => state.auth)
  useAuthGuard()

  return (
    <>
      <Navbar user={user} />
      <Outlet></Outlet>
    </>
  )
}

export default App
