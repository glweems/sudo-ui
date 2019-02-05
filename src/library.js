import Vue from "vue";
import SudoNavbar from "@/components/Navbar/SudoNavbar";
import SudoSidebar from "@/components/Sidebar/SudoSidebar";
import SudoHero from "@/components/Hero/SudoHero";
import HambugerButton from "@/components/Simple/HambugerButton";

const Components = {
  SudoNavbar,
  SudoSidebar,
  SudoHero,
  HambugerButton
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
