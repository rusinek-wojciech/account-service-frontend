import { Link } from 'react-router-dom'
import { useAppSelector } from '../redux/hooks'
import { checkRoles } from '../services/utils'
import Navbar from './Navbar'

const Main = () => {
  const { user } = useAppSelector((state) => state.auth)

  return (
    <div>
      <Navbar user={user} />
      {!!user && (
        <>
          <h2>{`Welcome ${user.name}!`}</h2>
          <div>
            {checkRoles(user, 'ADMINISTRATOR') && (
              <Link to='/admin'>
                <button>Admin Panel</button>
              </Link>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default Main
