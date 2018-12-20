import { API } from '@services'
export const FAILED_RECEIVE_USER_POSTS = 'FAILED_RECEIVE_USER_POSTS'
export const RECEIVE_USER_POSTS = 'RECEIVE_USER_POSTS'
export const REQUEST_USER_POSTS = 'REQUEST_USER_POSTS'

function requestUserPosts(payload) {
  return {
    type: REQUEST_USER_POSTS,
    payload
  }
}

function receiveUserPosts(payload) {
  return {
    type: RECEIVE_USER_POSTS,
    payload
  }
}

function failedReceiveUserPosts(payload) {
  return {
    type: FAILED_RECEIVE_USER_POSTS,
    payload
  }
}

export function getUserPosts(userId) {
  return function (dispatch) {
    dispatch(requestUserPosts())

    return API.get(`users/${userId}/posts`)
      .then(function (response) {
        response.data.userId = userId
        dispatch(receiveUserPosts(response.data))
      })
      .catch(function (error) {
        dispatch(failedReceiveUserPosts(error))
      })
  }
}
