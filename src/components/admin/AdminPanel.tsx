import UserTable from 'components/admin/UserTable'
import { useAppSelector } from 'redux/hooks'

const AdminPanel = () => {
  const { user } = useAppSelector((state) => state.auth)

  return <div>{!!user && <UserTable />}</div>
}

export default AdminPanel
