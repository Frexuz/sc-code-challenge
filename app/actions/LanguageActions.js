export const SET_APP_LANGUAGE = 'SET_APP_LANGUAGE'

export const setLanguage = (payload) => ({
  type: SET_APP_LANGUAGE,
  payload
})

export function setAppLanguage(payload) {
  return function (dispatch) {
    dispatch(setLanguage(payload))
  }
}
