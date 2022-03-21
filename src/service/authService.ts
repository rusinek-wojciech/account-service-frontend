import { store } from '../store'
import { SignUpObject, User } from '../types'

const authHeader = () => {
  const token = store.getState().auth.token
  if (!token) {
    throw new Error(`Invalid token provided`)
  }
  return {
    'Content-Type': 'application/json',
    Authorization: `Basic ${token}`,
  }
}

export const signUp = async (object: SignUpObject): Promise<User> => {
  const response = await fetch('api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(object),
  })
  return response.json()
}

export const login = async (): Promise<User> => {
  const response = await fetch(`api/auth/login`, { headers: authHeader() })
  return response.json()
}
