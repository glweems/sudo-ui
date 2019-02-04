import Vue from "vue";
import Router from "vue-router";
import Library from "@/library";
import Home from "@/views/Home.vue";
import Docs from "@/views/Docs";
import ExampleHero from "@/views/examples/ExampleHero";
import ExampleButton from "@/views/examples/ExampleButton";

Vue.use(Router, Library);

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
          path: "hero",
          name: "Hero",
          component: ExampleHero
        },
        {
          path: "button",
          name: "Button",
          component: ExampleButton
        }
      ]
    }
  ]
});
