import { Link } from 'react-router-dom'

import { useAppSelector } from 'redux/hooks'
import { isUserAllowed } from 'services/utils'

const Home = () => {
  const { user } = useAppSelector((state) => state.auth)

  return (
    <>
      <h2>{`Welcome ${user?.name ?? 'guest'}!`}</h2>
      {!!user && (
        <>
          {isUserAllowed(user, ['ADMINISTRATOR']) && (
            <Link to='/admin'>
              <button>Admin Panel</button>
            </Link>
          )}
          {isUserAllowed(user, ['AUDITOR']) && (
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
