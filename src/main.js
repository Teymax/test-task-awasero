import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import instance from '@/api/instance'

Vue.prototype.$http = instance
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
