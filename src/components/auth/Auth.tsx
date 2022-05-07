import Empty from 'components/special/Empty'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'
import { Role } from 'redux/main/types'
import { isUserAllowed } from 'services/access/utils'

type Props = {
  children: JSX.Element
  roles?: Role[]
}

const Auth = ({ children, roles = ['USER'] }: Props) => {
  const { user } = useAppSelector((state) => state.auth)

  if (!user) {
    return <Navigate to='/login' />
  }

  if (!isUserAllowed(user, roles)) {
    return <Empty />
  }

  return children
}

export default Auth
