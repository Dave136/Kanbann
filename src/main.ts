import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router/index';
import 'virtual:windi.css';

const app = createApp(App);

app.use(router).use(createPinia()).mount('#app');
