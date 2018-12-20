import { API } from '@services'
export const FAILED_RECEIVE_USERS = 'FAILED_RECEIVE_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const REQUEST_USERS = 'REQUEST_USERS'

function requestUsers(payload) {
  return {
    type: REQUEST_USERS,
    payload
  }
}

function receiveUsers(payload) {
  return {
    type: RECEIVE_USERS,
    payload
  }
}

function failedReceiveUsers(payload) {
  return {
    type: FAILED_RECEIVE_USERS,
    payload
  }
}

export function getUsers() {
  return function (dispatch) {
    dispatch(requestUsers())

    return API.get('users')
      .then(function (response) {
        dispatch(receiveUsers(response.data))
      })
      .catch(function (error) {
        dispatch(failedReceiveUsers(error))
      })
  }
}
