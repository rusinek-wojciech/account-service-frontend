import { Role, User } from 'redux/main/types'
import { store } from 'redux/store'

/**
 * @returns true when User has any allowed role
 */
export const isUserAllowed = (
  allowedRoles: Role[],
  user: User | null = store.getState().auth.user
): boolean => {
  if (!user) {
    return false
  }
  if (allowedRoles.length === 0) {
    return true
  }
  return user.roles.some((role) => allowedRoles.includes(role))
}
