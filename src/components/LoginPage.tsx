import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { setLoggedUser, setToken } from '../features/authSlice'
import { useAppDispatch } from '../hooks'
import { login } from '../service/authService'

const LoginPage = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value)
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(setToken({ email, password }))
    login()
      .then((user) => dispatch(setLoggedUser(user)))
      .then(() => navigate('/'))
      .catch(() => console.warn(`Failed to login ${email} ${password}`))
  }

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='text'
          value={email}
          onChange={handleEmailChange}
        />
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          type='password'
          value={password}
          onChange={handlePasswordChange}
        />
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default LoginPage
