import { User } from 'redux/main/types'

type Props = {
  onChangeLock: (user: User) => void
  onDelete: (user: User) => void
  onChangeRole: (user: User) => void
  users?: User[]
}

const UserTable = ({
  onChangeLock,
  onDelete,
  onChangeRole,
  users = [],
}: Props) => {
  const handleChangeLock = (user: User) => () => onChangeLock(user)
  const handleDelete = (user: User) => () => onDelete(user)
  const handleChangeRole = (user: User) => () => onChangeRole(user)

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
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{`${user.name} ${user.lastname}`}</td>
              <td>{user.email}</td>
              <td>{user.roles.join(', ')}</td>
              <td>
                <button onClick={handleChangeLock(user)}>
                  {user.accountNonLocked ? 'Lock' : 'Unlock'}
                </button>
                <button onClick={handleDelete(user)}>Delete</button>
                <button onClick={handleChangeRole(user)}>Change role</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default UserTable
