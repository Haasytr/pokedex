import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',
      black: '#000',

      gray_100: '#f7f7f8',
      gray_800: '#808080',
      gray_900: '#18191a',

      blue_300: '#4fcefc',
      blue_700: '#2e23fb',

      green_700: '#5ECED4',

      orange_400: '#FFA756',
      orange_600: '#F97316',
    },
    fontSizes: {
      sm: '1.015rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2.25rem',
    },
  },
  media: {
    mobile: '(min-width: 768px)',
  },
})