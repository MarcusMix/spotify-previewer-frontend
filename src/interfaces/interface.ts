export type TUser = {
  name: string,
  image: string
}

export type SpotifyAlbumPage = {
  album_type: string
  artists: TSpotifySearchArtist[]
  copyrights: TSpotifyCopyright[]
  external_ids: TSpotifySearchExternalIds
  external_urls: TSpotifySearchExternalUrls
  genres: any[]
  href: string
  id: string
  images: TSpotifySearchImage[],
  label: string
  name: string
  popularity: number
  release_date: string
  release_date_precision: string
  total_tracks: number
  tracks: TSpotifySearchTracks,
  type: string
  uri: string
}

export interface TSpotifyCopyright {
  text: string
  type: string
}

export interface TSpotifySearch {
  albums: TSpotifySearchAlbums;
  artists: TSpotifySearchArtists;
  tracks: TSpotifySearchTracksItem[];
}

export type TSpotifyArtistTopTracks = {
  artist: TSpotifySearchArtistsItem,
  tracks: TSpotifySearchTracksItem[],
};

export type TSpotifyAlbumTracks = {
  album: SpotifyAlbumPage,
  tracks: TSpotifySearchTracksItem[],
};

export interface TSpotifySearchAlbums {
  href: string;
  items: TSpotifySearchAlbumsItem[];
  limit: number;
  next: string;
  offset: number;
  previous: any;
  total: number;
}

export interface TSpotifySearchAlbumsItem {
  album_type: string;
  artists: TSpotifySearchArtist[];
  external_urls: TSpotifySearchExternalUrls2;
  href: string;
  id: string;
  images: TSpotifySearchImage[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface TSpotifySearchArtist {
  external_urls: TSpotifySearchExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface TSpotifySearchExternalUrls {
  spotify: string;
}

export interface TSpotifySearchExternalUrls2 {
  spotify: string;
}

export interface TSpotifySearchImage {
  height: number;
  url: string;
  width: number;
}

export interface TSpotifySearchArtists {
  href: string;
  items: TSpotifySearchArtistsItem[];
  limit: number;
  next: string;
  offset: number;
  previous: any;
  total: number;
}

export interface TSpotifySearchArtistsItem {
  external_urls: TSpotifySerachExternalUrls3;
  followers: TSpotifySearchFollowers;
  genres: string[];
  href: string;
  id: string;
  images: TSpotifySearchImage2[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface TSpotifySerachExternalUrls3 {
  spotify: string;
}

export interface TSpotifySearchFollowers {
  href: any;
  total: number;
}

export interface TSpotifySearchImage2 {
  height: number;
  url: string;
  width: number;
}

export interface TSpotifySearchTracks {
  href: string;
  items: TSpotifySearchTracksItem[];
  limit: number;
  next: string;
  offset: number;
  previous: any;
  total: number;
}

export interface TSpotifySearchTracksItem {
  album: TSpotifySearchAlbum;
  artists: TSpotifySearchArtist3[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: TSpotifySearchExternalIds;
  external_urls: TSpotifySearchExternalUrls7;
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url: any;
  track_number: number;
  type: string;
  uri: string;
}

export interface TSpotifySearchAlbum {
  album_type: string;
  artists: TSpotifySearchArtist2[];
  external_urls: TSpotifySearchExternalUrls5;
  href: string;
  id: string;
  images: TSpotifySearchImage3[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface TSpotifySearchArtist2 {
  external_urls: TSpotifySearchExternalUrls4;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface TSpotifySearchExternalUrls4 {
  spotify: string;
}

export interface TSpotifySearchExternalUrls5 {
  spotify: string;
}

export interface TSpotifySearchImage3 {
  height: number;
  url: string;
  width: number;
}

export interface TSpotifySearchArtist3 {
  external_urls: TSpotifySearchExternalUrls6;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface TSpotifySearchExternalUrls6 {
  spotify: string;
}

export interface TSpotifySearchExternalIds {
  isrc: string;
}

export interface TSpotifySearchExternalUrls7 {
  spotify: string;
}

export type TCurrentTrack = {
  name: string,
  image?: string,
  uri: string,
}