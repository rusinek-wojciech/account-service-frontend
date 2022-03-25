import { GetUser, Role, User } from './types'

export const convertUser = (user: GetUser): User => ({
  ...user,
  roles: user.roles.map((role) => role.slice(5) as Role),
})
