import { useLocation, useNavigate } from 'react-router-dom'

const Empty = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = () => navigate('/')

  return (
    <>
      <h2>This page is empty!</h2>
      <p>{`Path "${location.pathname}" does not exist!`}</p>
      <button onClick={handleClick}>Go back</button>
    </>
  )
}

export default Empty
