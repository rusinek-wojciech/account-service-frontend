import { useState, ChangeEvent, FormEvent } from 'react'

import { ErrorResponse } from '../redux/main/types'
import { signUp } from '../services/authService'

const SignUpPage = () => {
  const [name, setName] = useState<string>('')
  const [lastname, setLastname] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errorResponse, setErrorResponse] = useState<ErrorResponse>()

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
    await signUp({ name, lastname, email, password }).catch(
      (err: ErrorResponse) => setErrorResponse(err)
    )
  }

  return (
    <div>
      <h2>Sign Up Page</h2>
      <form onSubmit={handleSubmit}>
        {!!errorResponse && (
          <div>
            <p>{`Status: ${errorResponse.status} ${errorResponse.error}`}</p>
            <p>{`Message: ${errorResponse.message}`}</p>
          </div>
        )}
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          type='text'
          value={name}
          autoComplete='on'
          onChange={handleNameChange}
        />
        <label htmlFor='lastname'>Lastname</label>
        <input
          id='lastname'
          type='text'
          value={lastname}
          autoComplete='on'
          onChange={handleLastnameChange}
        />
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

export default SignUpPage
