import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import mitt from "mitt";

const emitter = mitt();
window.emitter = emitter; // Ini membuat emitter bisa diakses dari console

export default emitter;
createApp(App).use(router).mount('#app')


