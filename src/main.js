import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';


createApp(App)
    .use(router)
    .mount('#app')
