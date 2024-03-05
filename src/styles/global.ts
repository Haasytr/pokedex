import { globalCss } from '.'

import bgImg from '../assets/bg/default.gif'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundImage: `url(${bgImg})`
  },

  'body, input, textarea, buton': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  a: {
    textDecoration: 'none',
  },
})