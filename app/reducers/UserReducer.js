import _ from 'lodash'

import { RECEIVE_USERS, REQUEST_USERS, FAILED_RECEIVE_USERS } from '@actions/UserActions'
import { toIdHash } from '@utils'

const initialState = {
  byId: [],
  isFetching: false,
}

function localReducer (state = initialState, action) {
  switch (action.type) {
    case REQUEST_USERS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_USERS:
      return {
        ...state,
        byId: {
          ...state.usersById,
          ...toIdHash(action.payload)
        },
        isFetching: false
      }
    case FAILED_RECEIVE_USERS:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}

export default localReducer
