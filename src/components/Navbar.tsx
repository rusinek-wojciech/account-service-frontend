import { Link } from 'react-router-dom'
import { useLoginQuery } from 'redux/main/mainApi'

const Navbar = () => {
  const { data: user } = useLoginQuery()
  return user ? (
    <div className='navbar'>
      <b>{user.email}</b>
      <Link className='navbar-right' to='/logout'>
        <button>Logout</button>
      </Link>
      <span className='navbar-right'>{user.roles.join(' ')}</span>
    </div>
  ) : (
    <div className='navbar'>
      <b>User not logged in</b>
      <Link className='navbar-right' to='/login'>
        <button>Login</button>
      </Link>
      <Link className='navbar-right' to='/sign-up'>
        <button>Sign up</button>
      </Link>
    </div>
  )
}

export default Navbar
