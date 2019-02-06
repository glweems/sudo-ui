import Vue from "vue";
import Router from "vue-router";
import SudoUi from "@/components";
import Home from "@/views/Home.vue";
import Docs from "@/views/Docs";

Vue.use(Router, SudoUi);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/docs",
      component: Docs,
      children: [
        {
          path: "#hero",
          name: "Hero"
        },
        {
          path: "#button",
          name: "Button"
        }
      ]
    }
  ]
});