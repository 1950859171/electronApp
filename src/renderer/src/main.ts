import './assets/style/main.css'
import { createPinia } from 'pinia'
// import naive from 'naive-ui'
import router from './router'
import { i18n } from './i18n'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
app.use(i18n)
app.use(createPinia())
app.use(router)

// naive-ui 样式注入,防止tailwind覆盖naive的样式
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

app.mount('#app')
