import { FC } from "react"

//loader
import { Oval } from "react-loader-spinner"

//types
import LoaderProps from "./loader.types"

const Loader:FC<LoaderProps> = ({open, text}) => {
    if(!open) return null;

    return (
        <div className="flex max-w-md py-2 gap-2 items-center justify-start">
            <Oval
                height={20}
                width={20}
                color="#1DB954"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#11913f"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
            {text}
        </div>
    )
}

export default Loader