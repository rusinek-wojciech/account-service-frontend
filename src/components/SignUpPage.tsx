import { useState, ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { setToken, setLoggedUser } from '../features/authSlice'
import { useAppDispatch } from '../hooks'
import { signUp } from '../service/authService'

const SignUpPage = () => {
  const [name, setName] = useState<string>('')
  const [lastname, setLastname] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value)
  const handleLastnameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setLastname(e.target.value)
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value)
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const user = await signUp({ name, lastname, email, password })
    dispatch(setToken({ email, password }))
    dispatch(setLoggedUser(user))
    navigate('/')
  }

  return (
    <div>
      <h2>Sign Up Page</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input id='name' type='text' value={name} onChange={handleNameChange} />
        <label htmlFor='lastname'>Lastname</label>
        <input
          id='lastname'
          type='text'
          value={lastname}
          onChange={handleLastnameChange}
        />
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

export default SignUpPage
