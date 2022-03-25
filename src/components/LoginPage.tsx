import { ChangeEvent, FormEvent, useReducer, Reducer } from 'react'

import { setToken } from '../redux/auth/authSlice'
import { useAppDispatch } from '../redux/hooks'

type State = {
  email: string
  password: string
}

type Action = {
  type: string
  payload: string
}

const LoginPage = () => {
  const dispatch = useAppDispatch()
  const [state, setState] = useReducer<Reducer<State, Action>>(
    (state, action) => ({ ...state, [action.type]: action.payload }),
    { email: '', password: '' }
  )

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setState({ type: target.id, payload: target.value })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(setToken(state))
  }

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
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

export default LoginPage
