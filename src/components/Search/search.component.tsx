//hooks
import { useCallback, useEffect, useState } from "react"

//recoil
import { useRecoilState } from "recoil"

//atom
import { atomSearch } from "../../store/atoms/atom"

//components
import Button from "../Button/button"
import Input from "../Input/input"

const Search = () => {
    //local: states
    const [inputSearch, setInputSearch] = useState<string>('')

    //recoil: states
    const [search, setSearch] = useRecoilState(atomSearch)

    const onSearch = useCallback(() => {
        setSearch(inputSearch)
    }, [search, inputSearch])

    useEffect(() => {
        setInputSearch(search)
    }, [search])

    return (
      <div className='flex gap-2 pt-2 max-w-full md:max-w-sm '>
        <Input onChange={(event) => setInputSearch(event.target.value)} placeholder='O que você quer ouvir?'/>
        <Button onClick={() => onSearch()}>Ok</Button>
      </div>
    )
}

export default Search