import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Library from './library'

Vue.use(Router, Library)

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
