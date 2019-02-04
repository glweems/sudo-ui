import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pages: [{ name: "Get Started", link: "/setup" }, { name: "Docs", link: "/docs" }],
    brand: "Sudo Ui"
  },
  mutations: {

  },
  actions: {

  }
})
