import { GetUser, User, Role } from 'redux/main/types'

export const convertUser = (user: GetUser): User => ({
  ...user,
  roles: user.roles.map((role) => role.slice(5) as Role),
})
