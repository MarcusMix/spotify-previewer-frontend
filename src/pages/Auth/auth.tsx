import { useParams } from "react-router-dom"

const Auth = () => {
  const { token } = useParams()

  console.log(token?.replace('token=', ''))

  return (
    <div>auth...</div>
  )
}

export default Auth