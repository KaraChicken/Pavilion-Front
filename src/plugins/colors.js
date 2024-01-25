/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

const MyLightStyle = {
  dark: false,
  colors: {
    primary: '#A0674B',
    secondary: '#6C6A2D',
    tertiary: '#CAAD5F',
    Accent: '#000',
    error: '#ff0000',
    Success: '#008000',
    Warning: '#ffff00',
    info: '#0000ff',
    text01: '#D9CD90',
    text02: '#008000',
    text03: '#ff0000'
  }
}
const MyDarkStyle = {
  dark: true,
  colors: {
    primary: '#6C6A2D',
    secondary: '#A0674B',
    tertiary: '#ffff',
    Accent: '#000',
    error: '#5f0101',
    Success: '#015601',
    Warning: '#747400',
    info: '#010169',
    text01: '#000',
    text02: '#015601',
    text03: '#5f0101'
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: MyLightStyle,
      dark: MyDarkStyle
    },
  },
})
