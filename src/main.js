// import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import Router from 'vue-router'
// createApp(App).mount('#app')
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  render: h => h(App)
})
