import Vue from 'vue';
import App from './app/app.vue';

Vue.config.debug = true;
Vue.config.devtools = true;

new Vue( Vue.util.extend(App) )
    .$mount('app');
