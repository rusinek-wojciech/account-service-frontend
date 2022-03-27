import Empty from 'components/special/Empty'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'
import { Role } from 'redux/main/types'
import { checkRoles } from 'services/utils'

type Props = {
  children: JSX.Element
  roles?: Role[]
}

const Auth = ({ children, roles = ['USER'] }: Props) => {
  const { user } = useAppSelector((state) => state.auth)

  if (!user) {
    return <Navigate to='/login' />
  }

  const isAllowed = roles
    .map((role) => checkRoles(user, role))
    .reduce((acc, allowed) => acc || allowed)

  if (!isAllowed) {
    return <Empty />
  }

  return children
}

export default Auth
