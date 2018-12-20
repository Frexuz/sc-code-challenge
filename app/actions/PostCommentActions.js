import { API } from '@services'

export function getPostComments(postId) {
  return API.get(`posts/${postId}/comments`)
}
