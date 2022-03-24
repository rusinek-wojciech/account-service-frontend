export interface User {
  id: number
  email: string
  name: string
  lastname: string
  roles: string[]
}

export interface Event {
  id: number
  date: Date // TODO: check if is okay
  action: string
  subject: string
  object: string
  path: string
}

export interface Payment {
  name: string
  lastname: string
  period: string
  salary: string
}

export interface NewUser {
  name: string
  lastname: string
  email: string
  password: string
}

export interface ErrorResponse {
  error: string
  message: string
  path: string
  status: number
  timestamp: Date
}
