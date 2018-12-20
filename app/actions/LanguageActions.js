export const SET_APP_LANGUAGE = 'SET_APP_LANGUAGE'

export const setLocalLanguage = (payload) => ({
  type: SET_APP_LANGUAGE,
  payload
})

export function setAppLanguage (payload) {
  return function (dispatch) {
    dispatch(setLocalLanguage(payload))
    const locale = { locale: payload.appLanguage.locale }
  }
}
