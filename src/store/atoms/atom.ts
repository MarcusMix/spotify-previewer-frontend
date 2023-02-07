import {atom} from 'recoil'
import { TSpotifySearchAlbumsItem, TSpotifySearchArtistsItem, TSpotifySearchTracksItem, TUser } from '../../interfaces/interface'
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

export const atomSearch = atom<string>({
  key: 'atomSearch',
  default: ''
})

export const atomAlbums = atom<TSpotifySearchAlbumsItem[]>({
  key: 'atomAlbums',
  default: []
})

export const atomArtists = atom<TSpotifySearchArtistsItem[]>({
  key: 'atomArtists',
  default: []
})

export const atomTracks = atom<TSpotifySearchTracksItem[]>({
  key: 'atomTracks',
  default: []
})