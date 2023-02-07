import { FC } from "react"

//types
import CardItemProps from "./card-item.types"

const CardItem:FC<CardItemProps> = ({author, name, image}) => {
    return (
        <div className="flex flex-col w-36 h-44 gap-2 min-h-fit min-w-fit">
            {
                image ? (
                    <img draggable={false} className="w-32 h-32 rounded-md shadow-md" src={image} alt={name} />
                ) : (
                    <div className="w-32 h-32 rounded-md shadow-md bg-spotify-green"></div>
                )
            }

            <h2 className="w-28 text-sm whitespace-nowrap truncate">{name}</h2>
            {!author && (
            <h3 
                className="w-28 text-sm whitespace-nowrap truncate text-zinc-700 dark: text-zinc-400"
            >{author}
            </h3>
            )}
        </div>
    )
}


export default CardItem