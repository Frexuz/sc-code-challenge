import { API } from '@services'

export function getUserTodos(userId) {
  return API.get(`users/${userId}/todos`)
}
