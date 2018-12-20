import _ from 'lodash'
import I18n from '@I18n'

export function scopedI18n (scope) {
  return function (translationKey, interpolations = {}) {
    if (_.startsWith(translationKey, '.')) {
      return I18n.t(`${scope}${translationKey}`, interpolations)
    } else {
      return I18n.t(translationKey, interpolations)
    }
  }
}

export function arrayToIdHash (array, key) {
  let hash = {}
  array.forEach(s => (hash[_.get(s, key)] = s))
  return hash
}

export function hashToFlatArray (hash) {
  return Object.keys(hash).map(k => hash[k])
}

export function toIdHash (payload, state) {
  let hash = { ...state }
  payload.forEach(item => {
    hash = _.assign(hash, { [item.id]: item })
  })
  return hash
}
