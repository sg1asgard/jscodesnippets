import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/scss/main.scss'

import 'highlight.js/styles/github-dark-dimmed.css'
// import 'highlight.js/styles/tokyo-night-dark.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'

const app = createApp(App)

app.use(hljsVuePlugin)
app.use(createPinia())
app.use(router)

app.mount('#app')
