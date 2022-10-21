import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import 'jquery'
import 'jquery/dist/jquery.slim.min.js'

import 'popper.js'
import 'popper.js/dist/umd/popper.min.js'


createApp(App).use(router).mount('#app')
