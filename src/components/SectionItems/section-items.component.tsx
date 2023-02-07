import { useRecoilValue } from "recoil"
import { atomAlbums, atomArtists, atomTracks } from "../../store/atoms/atom"
import CardItem from "../CardItem/card-item.component"
import DraggableItems from "../DraggableItems/draggable-items.componet"

const SectionItems = () => {
    //recoil states
    const artists = useRecoilValue(atomArtists)
    const albums = useRecoilValue(atomAlbums)
    const tracks = useRecoilValue(atomTracks)
    
    return (
        <div className="flex flex-co gap-5">
            {artists?.length > 0 && (
                <div className="flex flex-col gap-3">
                    <h2>Artistas</h2>
                    <DraggableItems>
                        {artists.map((artist) => (
                            <CardItem
                                name={artist.name}
                                image={artist?.images?.[0 || 1 || 2]?.url}
                            />
                        ))}
                    </DraggableItems>
                </div>
            )}

            {albums?.length > 0 && (
                <div className="flex flex-col gap-3">
                    <h2>Albums</h2>
                    <DraggableItems>
                        {albums.map((album) => (
                            <CardItem
                                name={album.name}
                                image={album?.images?.[0 || 1 || 2]?.url}
                                author={album?.artists?.map((artist) => artist?.name)}
                            />
                        ))}
                    </DraggableItems>
                </div>
            )}

        </div>
    )
}

export default SectionItems