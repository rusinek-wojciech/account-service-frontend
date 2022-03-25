import { useAppSelector } from '../redux/hooks'
import { useGetUsersQuery } from '../redux/main/mainApi'
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
