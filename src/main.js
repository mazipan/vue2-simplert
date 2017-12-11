/* eslint-disable space-before-blocks */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'

if (process.env.NODE_ENV !== 'production'){
  Vue.config.devtools = true
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})
