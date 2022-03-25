import { Role, User } from '../redux/main/types'

export const checkRoles = ({ roles }: User, role: Role): boolean => {
  return roles.includes(role)
}
