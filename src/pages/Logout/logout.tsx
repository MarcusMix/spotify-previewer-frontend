import { atomToken, atomUser } from "../../store/atoms/atom"
import {useRecoilValue, useResetRecoilState} from 'recoil'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Logout = () => {
  const navigate = useNavigate()

  const token = useRecoilValue(atomToken) // pegando dados tone
  const user = useRecoilValue(atomUser) // pegando dados user

  const resetUser = useResetRecoilState(atomUser)
  const resetToken = useResetRecoilState(atomToken)

  // quando foi iniciado, fará isso
  useEffect(() => {
    if(!user && !token) {
      navigate('/')
    }
  }, [user, token])

  useEffect(() => {
    resetToken()
    resetUser()
  }, [])

  return (
    <div>
      <p>desconentand</p>
    </div>
  )
}

export default Logout