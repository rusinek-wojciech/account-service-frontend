export enum Role {
  USER = 'USER',
  ACCOUNTANT = 'ACCOUNTANT',
  ADMINISTRATOR = 'ADMINISTRATOR',
  AUDITOR = 'AUDITOR',
}

export type Period = {
  period?: string
}

export type DeleteUser = {
  id: number
  username: string
}

export type User = {
  id: number
  name: string
  lastname: string
  email: string
  roles: Role[]
  accountNonLocked: boolean
}

export type GetUser = {
  id: number
  name: string
  lastname: string
  email: string
  roles: string[]
  accountNonLocked: boolean
}

export type UpdateRole = {
  id: number
  user: string
  role: Role
  operation: 'GRANT' | 'REMOVE'
}

export type UpdateLockUser = {
  id: number
  user: string
  operation: 'LOCK' | 'UNLOCK'
}

export type Payment = {
  employee: string
  period: string
  salary: number
}

export type NewUser = {
  name: string
  lastname: string
  email: string
  password: string
}

export type UpdatePassword = {
  newPassword: string
}

export type EventAction =
  | 'CREATE_USER'
  | 'CHANGE_PASSWORD'
  | 'ACCESS_DENIED'
  | 'LOGIN_FAILED'
  | 'GRANT_ROLE'
  | 'REMOVE_ROLE'
  | 'LOCK_USER'
  | 'UNLOCK_USER'
  | 'DELETE_USER'
  | 'BRUTE_FORCE'

export type Event = {
  id: number
  date: string
  action: EventAction
  subject: string
  object: string
  path: string
}

export interface ErrorResponse {
  error: string
  message: string
  path: string
  status: number
  timestamp: Date
}

export interface Status {
  status: string
}
