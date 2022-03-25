import { useAppSelector } from '../redux/hooks'
import Navbar from './Navbar'
import UserTable from './UserTable'

const AdminPanel = () => {
  const { user } = useAppSelector((state) => state.auth)

  return (
    <div>
      <Navbar user={user} />
      {!!user && <UserTable />}
    </div>
  )
}

export default AdminPanel
