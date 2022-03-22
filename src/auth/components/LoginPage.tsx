import { ChangeEvent, FormEvent, useState } from 'react'

import { useAppDispatch } from '../../hooks'
import { setToken } from '../authSlice'

const LoginPage = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const dispatch = useAppDispatch()

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value)
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(setToken({ email, password }))
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
          autoComplete='on'
          onChange={handleEmailChange}
        />
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          type='password'
          value={password}
          autoComplete='on'
          onChange={handlePasswordChange}
        />
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default LoginPage
