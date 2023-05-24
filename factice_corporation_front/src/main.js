import { createApp } from 'vue'
import store from "@/Store";
import 'bootstrap/dist/css/bootstrap.css'

import App from './App.vue'

createApp(App)
  .use(store)
  .mount('#app')
