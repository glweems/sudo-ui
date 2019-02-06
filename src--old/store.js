import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pages: [
      { name: "Get Started", link: "/setup" },
      { name: "Docs", link: "/docs" }
    ],
    docs: {
      components: [{ name: "Hero" }, { name: "Button" }]
    },
    brand: "Sudo Ui",
    isMobileDevice: false,
    sidebarOpen: true
  },
  mutations: {
    IS_DEVICE_MOBILE: state => {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
      ) {
        state.isMobileDevice = true;
        state.sidebarOpen = false;
      }
    },
    TOGGLE_SIDEBAR: state => {
      state.sidebarOpen = !state.sidebarOpen;
    }
  },
  actions: {}
});
