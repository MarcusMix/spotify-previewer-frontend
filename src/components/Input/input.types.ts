// atributos input do html
import {InputHTMLAttributes} from 'react'

export interface IIpuntProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}