import _ from 'lodash'

import { SHOW_TOAST, EMPTY_TOAST } from '@actions/LocalActions'

const initialState = {}

function localReducer (state = initialState, action) {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        ...state,
        toast: {
          text: action.payload.text,
          showToast: true
        }
      }
    case EMPTY_TOAST:
      return {
        ...state,
        toast: {
          text: null,
          showToast: false
        }
      }
    default:
      return state
  }
}

export default localReducer
