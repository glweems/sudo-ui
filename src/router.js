import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SudoUi from './sudo-ui.js'

Vue.use(Router, SudoUi)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
