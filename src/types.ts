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

export interface SignUpObject {
  name: string
  lastname: string
  email: string
  password: string
}
