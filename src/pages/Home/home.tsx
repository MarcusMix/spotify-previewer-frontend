//hooks
import { useEffect, useMemo } from 'react' 

//recoil
import { useRecoilState, useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from 'recoil'

//draggable
import DraggableItems from '../../components/DraggableItems/draggable-items.componet'

//components
import CardItem from '../../components/CardItem/card-item.component'
import Loader from '../../components/Loader/loader.component'
import Search from '../../components/Search/search.component'

//atom
import { atomAlbums, atomArtists, atomTracks, atomUser } from '../../store/atoms/atom'

//selector
import { selectorGetSearch, selectorGetUser } from '../../store/selector/selector'
import SectionItems from '../../components/SectionItems/section-items.component'

const Home = () => {
  //recoil: states
  const user = useRecoilValue(atomUser)
  const setArtists = useSetRecoilState(atomArtists)
  const setAlbums = useSetRecoilState(atomAlbums)
  const setTracks = useSetRecoilState(atomTracks)

  
  //recoil: loadable
  const getSearchLoadable = useRecoilValueLoadable(selectorGetSearch)
  useRecoilValueLoadable(selectorGetUser)
  
  //memo: states
  const displayLoader = useMemo(() => {
    if(getSearchLoadable.state === 'loading'){
      return true
    }

    return false
  }, [getSearchLoadable])

  useEffect(() => {
    if(getSearchLoadable.state === 'hasValue' && getSearchLoadable.contents !== undefined) {
      if(getSearchLoadable.contents.albums.items.length > 0) {
          setAlbums(getSearchLoadable.contents.albums.items)
      }
      if(getSearchLoadable.contents.artists.items.length > 0) {
        setArtists(getSearchLoadable.contents.artists.items)
      }
      if(getSearchLoadable.contents.tracks?.length > 0) {
        setTracks(getSearchLoadable.contents.tracks)
    }
  }
  },[getSearchLoadable.state, getSearchLoadable.contents])


  console.log({contents: getSearchLoadable.contents, state: getSearchLoadable.state})

  return (
    <div>
      <Search/>
      <Loader open={displayLoader} text='Carregando...'/>
      <div className='py-10'>
        <SectionItems/>
      </div>
    </div>
  )
}

export default Home