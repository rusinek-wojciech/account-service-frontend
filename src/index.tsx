import { StrictMode } from 'react'
import { render } from 'react-dom'
import Root from 'components/Root'
import 'index.css'

render(
  <StrictMode>
    <Root />
  </StrictMode>,
  document.getElementById('root')
)
