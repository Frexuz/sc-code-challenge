import _ from 'lodash'

import { RECEIVE_USER_POSTS, REQUEST_USER_POSTS, FAILED_RECEIVE_USER_POSTS } from '@actions/UserPostActions'

const initialState = {
  byUserId: [],
  isFetching: false,
}

function userPostReducer (state = initialState, action) {
  switch (action.type) {
    case REQUEST_USER_POSTS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_USER_POSTS:
      return {
        ...state,
        byUserId: {
          ...state.usersById,
          [action.payload.userId]: action.payload
        },
        isFetching: false
      }
    case FAILED_RECEIVE_USER_POSTS:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}

export default userPostReducer
