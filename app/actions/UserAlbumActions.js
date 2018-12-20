import { API } from '@services'

export function getUserAlbums(userId) {
  return API.get(`users/${userId}/albums`)
}

export function getUserAlbumPhotos(albumId) {
  return API.get(`albums/${albumId}/photos`)
}
