import { Role, User } from 'redux/main/types'

/**
 * @returns true when User has any allowed role
 */
export const isUserAllowed = (
  { roles }: User,
  allowedRoles: Role[]
): boolean => {
  if (allowedRoles.length === 0) {
    return true
  }
  return roles.some((role) => allowedRoles.includes(role))
}
