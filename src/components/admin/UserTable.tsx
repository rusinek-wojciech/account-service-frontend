import { useEffect } from 'react'
import {
  useLockOrUnlockUserMutation,
  useDeleteUserMutation,
  useGetUsersQuery,
} from 'redux/main/mainApi'
import { User } from 'redux/main/types'

const UserTable = () => {
  const [lockOrUnlockUser, resultLockOrUnlockUser] =
    useLockOrUnlockUserMutation()

  const [deleteUser, resultDeleteUser] = useDeleteUserMutation()

  const { data: users } = useGetUsersQuery(undefined, {
    refetchOnMountOrArgChange: true,
  })

  useEffect(() => {
    if (!!resultLockOrUnlockUser.data) {
      window.alert(resultLockOrUnlockUser.data.status)
    }
  }, [resultLockOrUnlockUser])

  useEffect(() => {
    if (!!resultDeleteUser.data) {
      window.alert(resultDeleteUser.data.status)
    }
  }, [resultDeleteUser])

  const handleLockOrUnlock =
    ({ email, accountNonLocked }: User) =>
    () => {
      const operation = accountNonLocked ? 'LOCK' : 'UNLOCK'
      lockOrUnlockUser({ user: email, operation })
    }

  const handleDelete = (user: User) => () => {
    const allowed = window.confirm('Are you sure?')
    if (allowed) {
      deleteUser({ username: user.email })
    }
  }

  return (
    <table>
      <tbody>
        <tr>
          <th>Id</th>
          <th>Full name</th>
          <th>Email</th>
          <th>Roles</th>
          <th>Controls</th>
        </tr>
        {!!users &&
          users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{`${user.name} ${user.lastname}`}</td>
                <td>{user.email}</td>
                <td>{user.roles.join(', ')}</td>
                <td>
                  <button onClick={handleLockOrUnlock(user)}>
                    {user.accountNonLocked ? 'Lock' : 'Unlock'}
                  </button>
                  <button onClick={handleDelete(user)}>Delete</button>
                </td>
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}

export default UserTable
