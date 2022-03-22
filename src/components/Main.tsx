import { useGetUsersQuery } from '../features/api'
import { useAppSelector } from '../hooks'
import Navbar from './Navbar'

const Main = () => {
  const { user } = useAppSelector((state) => state.auth)

  const { data } = useGetUsersQuery(undefined, {
    refetchOnMountOrArgChange: true,
    skip: !user,
  })

  return (
    <div>
      <Navbar user={user} />
      {!!data &&
        data.map((user) => {
          return (
            <div key={user.id}>
              <span>{user.email}</span>
              <span>{user.roles.join(' ')}</span>
            </div>
          )
        })}
    </div>
  )
}

export default Main
