import Vue from 'vue'
import SudoUi from './SudoUi.vue'
import router from './router'
import store from './store'
import "./scss/app.scss"
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(SudoUi)
}).$mount('#app')
