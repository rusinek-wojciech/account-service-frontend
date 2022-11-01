import Empty from 'components/special/Empty'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'
import { useLoginQuery } from 'redux/main/mainApi'
import { Role } from 'redux/main/types'
import { isUserAllowed } from 'services/access/utils'

interface Props {
  children: JSX.Element
  allowedRoles?: Role[]
}

const Auth = ({ children, allowedRoles = [] }: Props) => {
  const token = useAppSelector((state) => state.auth.token)

  const {
    data: user,
    error,
    isLoading,
    refetch,
  } = useLoginQuery(undefined, {
    skip: !token,
  })

  useEffect(() => {
    console.log('refetch')
    refetch()
  }, [refetch, token])

  if (!token || error) {
    return <Navigate to='/login' />
  }

  if (isLoading || !user) {
    return <p>Loading...</p>
  }

  if (!isUserAllowed(allowedRoles)) {
    return <Empty />
  }

  return children
}

export default Auth
