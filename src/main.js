// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueAwesome from 'vue-awesome'
import axios from 'axios'
import moment from 'moment'
import App from './App'
import router from './router'

Vue.component('icon', VueAwesome)

Vue.use(BootstrapVue);
Vue.use(axios);
Vue.use(moment);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
  },
  template: '<App/>'
})
