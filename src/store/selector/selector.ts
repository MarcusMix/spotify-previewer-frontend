import {selector} from 'recoil'
import { requester } from '../../api/requester'
import { atomToken } from '../atoms/atom'

export const selectorGetUser = selector({
  key: 'selectorGetUser',
  get: async ({get}) => {
    const token = get(atomToken)

    if(!token) return

    const {data} = await requester({
      Authorization: token,
    }).get('/me')

    return data
  }
})