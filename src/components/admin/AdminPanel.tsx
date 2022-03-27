import UserTable from 'components/admin/UserTable'
import { useEffect, useState } from 'react'
import {
  useUpdateUserLockMutation,
  useDeleteUserMutation,
  useGetUsersQuery,
} from 'redux/main/mainApi'
import { User } from 'redux/main/types'

const AdminPanel = () => {
  const [status, setStatus] = useState<string>()

  const { data: users } = useGetUsersQuery(undefined, {
    refetchOnMountOrArgChange: true,
  })

  const [updateUserLock, updateUserLockResult] = useUpdateUserLockMutation()

  const [deleteUser, deleteUserResult] = useDeleteUserMutation()

  useEffect(() => {
    const newStatus = deleteUserResult.data?.status
    if (newStatus) {
      setStatus(newStatus)
    }
  }, [deleteUserResult])

  useEffect(() => {
    const newStatus = updateUserLockResult.data?.status
    if (newStatus) {
      setStatus(newStatus)
    }
  }, [updateUserLockResult])

  const handleChangeLock = ({ id, email, accountNonLocked }: User) => {
    const operation = accountNonLocked ? 'LOCK' : 'UNLOCK'
    updateUserLock({ id, user: email, operation })
  }

  const handleDelete = ({ id, email }: User) => {
    deleteUser({ id, username: email })
  }

  const handleChangeRole = (user: User) => {
    console.log(`changing ${user.email} role...`)
  }

  return (
    <div>
      <UserTable
        users={users}
        onChangeLock={handleChangeLock}
        onDelete={handleDelete}
        onChangeRole={handleChangeRole}
      />
      <p>{status}</p>
    </div>
  )
}

export default AdminPanel
