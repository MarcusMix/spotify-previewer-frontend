import { FC } from "react"
import { IIpuntProps } from "./input.types"

const Input: FC<IIpuntProps> = ({ label,...props }) => {
  return (
    <div className="flex flex-col w-full">
      {label && <label>{label}</label>}
      <input
        className="bg-white text-black
        placeholder:text-zinc-700 w-full dark: bg-zinc-800 dark: text-white dark: placeholder:text-grey-500 p-2 rounded-sm shadow-sm focus: outline-none"
        {...props}/>
    </div>
  )
}

export default Input