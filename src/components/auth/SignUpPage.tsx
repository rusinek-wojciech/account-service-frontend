import { useState, ChangeEvent, FormEvent, useReducer, Reducer } from 'react'

import { ErrorResponse, NewUser } from 'redux/main/types'
import { signUp } from 'services/authService'

type Action = {
  type: string
  payload: string
}

const SignUpPage = () => {
  const [errorResponse, setErrorResponse] = useState<ErrorResponse>()
  const [state, setState] = useReducer<Reducer<NewUser, Action>>(
    (state, action) => ({ ...state, [action.type]: action.payload }),
    { name: '', lastname: '', email: '', password: '' }
  )

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setState({ type: target.id, payload: target.value })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await signUp(state).catch((err: ErrorResponse) => setErrorResponse(err))
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
          value={state.name}
          autoComplete='on'
          onChange={handleChange}
        />
        <label htmlFor='lastname'>Lastname</label>
        <input
          id='lastname'
          type='text'
          value={state.lastname}
          autoComplete='on'
          onChange={handleChange}
        />
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='text'
          value={state.email}
          autoComplete='on'
          onChange={handleChange}
        />
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          type='password'
          value={state.password}
          autoComplete='on'
          onChange={handleChange}
        />
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default SignUpPage
