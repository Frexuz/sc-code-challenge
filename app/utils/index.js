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
