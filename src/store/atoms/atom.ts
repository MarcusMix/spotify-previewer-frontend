import {atom} from 'recoil'
import { TUser } from '../../interfaces/interface'
import { localStorageEffect } from '../../utils/localStorageEffect'

// atom de tokem tipado pra string
// valor default vazio
export const atomToken = atom<string>({
  key: 'atomToken',
  default: '',
  effects: [localStorageEffect("atomToken")]
})

export const atomUser = atom<TUser>({
  key: 'atomUser',
  default: undefined,
  effects: [localStorageEffect("atomUser")]
})