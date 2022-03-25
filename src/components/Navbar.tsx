import { Link } from 'react-router-dom'

import { User } from '../redux/main/types'

interface Props {
  user?: User
}

const Navbar = ({ user }: Props) => {
  if (!!user) {
    return (
      <div className='navbar'>
        <b>{user.email}</b>
        <Link className='navbar-right' to='/logout'>
          <button>Logout</button>
        </Link>
        <span className='navbar-right'>{user.roles.join(' ')}</span>
      </div>
    )
  }
  return (
    <div className='navbar'>
      <b>User not logged in</b>
      <Link className='navbar-right' to='/login'>
        <button>Login</button>
      </Link>
      <Link className='navbar-right' to='/signup'>
        <button>Sign up</button>
      </Link>
    </div>
  )
}

export default Navbar
