import { FC } from "react"
import { IButtonProps } from "./button.types"

const Button: FC<IButtonProps> = ({ children, ...props }) => {
  return (
    <div>
      <button {...props} className='bg-spotify-green hover:bg-spotify-green-200 transition-colors px-3 py-2 rounded-sm shadow-sm'>
        {children}
      </button>
    </div>
  )
}

export default Button