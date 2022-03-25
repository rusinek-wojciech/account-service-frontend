import { useAppSelector } from '../redux/hooks'
import UserTable from './UserTable'

const AdminPanel = () => {
  const { user } = useAppSelector((state) => state.auth)

  return <div>{!!user && <UserTable />}</div>
}

export default AdminPanel
