import { Outlet } from 'react-router-dom'

import useAuthGuard from '../hooks/useAuthGuard'
import { useAppSelector } from '../redux/hooks'
import Navbar from './Navbar'

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
