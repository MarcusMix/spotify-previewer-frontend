import { atomUser } from "../../store/atoms/atom"
import {useRecoilValue} from 'recoil'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()

  const user = useRecoilValue(atomUser)

  useEffect(() => {
    navigate('/home')
  }, [user])

  return (
    <div>
      <a href="http://localhost:8080/login">
        Login on Spotify
      </a>
    </div>
  )
}

export default Login