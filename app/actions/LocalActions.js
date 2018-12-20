export const SHOW_TOAST = 'SHOW_TOAST'
export const EMPTY_TOAST = 'EMPTY_TOAST'
export const CHANGE_QUERY_PARAMS = 'CHANGE_QUERY_PARAMS'

export function showToast (payload) {
  return {
    type: SHOW_TOAST,
    payload
  }
}
export function emptyToast () {
  return {
    type: EMPTY_TOAST
  }
}

export function changeQueryParams (payload) {
  return {
    type: CHANGE_QUERY_PARAMS,
    payload
  }
}

export function activateToast (payload) {
  return function (dispatch) {
    dispatch(showToast(payload))
  }
}

export function deactivateToast () {
  return function (dispatch) {
    dispatch(emptyToast())
  }
}
