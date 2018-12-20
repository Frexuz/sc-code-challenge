import { SET_COUNTRY_CODE } from '@actions/SetupActions'

const initialState = {
  countries: [],
  currentCountry: null
}

function countryReducer (state = initialState, action) {
  switch (action.type) {
    case SET_COUNTRY_CODE:
      return {
        ...state,
        currentCountry: action.payload
      }
    default:
      return state
  }
}

export default countryReducer
