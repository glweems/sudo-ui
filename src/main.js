import Vue from "vue";
import App from "./App.vue";
import SudoUi from "./";

Vue.use(SudoUi);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
