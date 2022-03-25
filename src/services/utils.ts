import { Role, User } from '../redux/main/types'

export const checkRoles = (user: User, role: Role): boolean => {
  return user.roles.includes(`ROLE_${role}`)
}
