import { useRecoilValue } from 'recoil'
import Button from '../../components/Button/button'
import Input from '../../components/Input/input'
import { atomUser } from '../../store/atoms/atom'

const Home = () => {

  const user = useRecoilValue(atomUser)
  return (
    <div>
      <div className='flex gap-2 pt-2 max-w-full md:max-w-sm '>
        <Input placeholder='O que você quer ouvir?'/>
        <Button>Ok</Button>
      </div>
    </div>
  )
}

export default Home