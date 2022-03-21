import { useGetUsersQuery } from '../features/api'
import { useAppSelector } from '../hooks'
import Navbar from './Navbar'

const Main = () => {
  const { user } = useAppSelector((state) => state.auth)

  const { data } = useGetUsersQuery(undefined, {
    skip: !user,
    refetchOnMountOrArgChange: true,
  })

  return (
    <div>
      <Navbar user={user} />
      {!!data &&
        data.map((user) => {
          return (
            <div>
              <span>{user.email}</span>
              <span>{user.roles.join(' ')}</span>
            </div>
          )
        })}
    </div>
  )
}

export default Main
