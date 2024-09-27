import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import your router here

createApp(App)
  .use(router) // Make sure to use the router here
  .mount('#app');
