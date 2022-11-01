import { Link } from 'react-router-dom'

import { useAppSelector } from 'redux/hooks'
import { Role } from 'redux/main/types'
import { isUserAllowed } from 'services/access/utils'

const Home = () => {
  const { user } = useAppSelector((state) => state.auth)

  return (
    <>
      <h2>{`Welcome ${user?.name ?? 'guest'}!`}</h2>
      {!!user && (
        <>
          {isUserAllowed([Role.ADMINISTRATOR]) && (
            <Link to='/admin'>
              <button>Admin Panel</button>
            </Link>
          )}
          {isUserAllowed([Role.AUDITOR]) && (
            <Link to='/auditor'>
              <button>Auditor Panel</button>
            </Link>
          )}
        </>
      )}
    </>
  )
}

export default Home
