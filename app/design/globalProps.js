import { setCustomText, setCustomTouchableOpacity, setCustomTouchableHighlight } from 'react-native-global-props'
import Colors from './Colors'

const customTextProps = {
  style: {
    fontSize: 14,
    color: Colors.primary
  }
}

const customTouchableOpacityProps = {
  activeOpacity: 0.8
}

const customTouchableHightlightProps = {
  underlayColor: Colors.specials.highlightUnderlayColor
}

export default function () {
  setCustomText(customTextProps)
  setCustomTouchableOpacity(customTouchableOpacityProps)
  setCustomTouchableHighlight(customTouchableHightlightProps)
}
