import { useLocation, useNavigate } from 'react-router-dom'

const Empty = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = () => navigate('/')

  return (
    <>
      <h2>Empty!</h2>
      <p>{`This path "${location.pathname}" is empty or you do not have access!`}</p>
      <button onClick={handleClick}>Go back</button>
    </>
  )
}

export default Empty
