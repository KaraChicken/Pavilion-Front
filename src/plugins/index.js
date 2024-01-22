/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
// import vuetify from './vuetify'
import colors from './colors'
import pinia from '../store'
import router from '../router'

export function registerPlugins (app) {
  app
    .use(colors)
    .use(router)
    .use(pinia)
}
