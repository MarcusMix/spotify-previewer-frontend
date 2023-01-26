import { useRecoilValue } from 'recoil'
import { atomUser } from '../../store/atoms/atom'

const Home = () => {

  const user = useRecoilValue(atomUser)
  return (
    <div>
      <h1>home</h1>
      <h1>Olá {user.name}</h1>
    </div>
  )
}

export default Home