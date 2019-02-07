import Vue from "vue";
import App from "./App.vue";
import SudoUi from "sudo-ui/src/index";
import "sudo-styling/scss/sudo-styling.scss";

Vue.use(SudoUi);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
