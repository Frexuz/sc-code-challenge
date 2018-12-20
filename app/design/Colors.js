const palette = {
  blues: {
    dark: '#072046',
    base: '#4173cd'
  },
  greys: {
    black: '#000',
    darkest: '#212121',
    darker: '#565656',
    dark: '#767676',
    base: '#999',
    light: '#ccc',
    lighter: '#eee',
    lightest: '#f6f6f6',
    white: '#fff'
  },
  greens: {
    base: '#41ad49',
    dark: '#6a6'
  },
  specials: {
    highlightUnderlayColor: 'rgba(0, 0, 0, 0.05)'
  },
  borders: {
    base: '#ddd'
  },
  tints: {
    transparent: 'rgba(0, 0, 0, 0)',
    black75: 'rgba(0, 0, 0, 0.75)',
    black50: 'rgba(0, 0, 0, 0.5)',
    black25: 'rgba(0, 0, 0, 0.25)',
    black10: 'rgba(0, 0, 0, 0.1)'
  }
}
const Colors = {
  primary: palette.blues.dark,
  secondary: palette.blues.base,
  white: palette.greys.white,
  black: palette.greys.black,
  success: palette.greens.base,
  blue: palette.blues,
  grey: palette.greys,
  green: palette.greens,
  text: {
    base: palette.greys.base,
    light: palette.greys.light,
    dark: palette.greys.dark,
    title: palette.blues.dark
  },
  tint: palette.tints,
  border: palette.borders,
  link: palette.blues.base,
  specials: palette.specials,
  transparent: palette.tints.transparent
}

export default Colors
