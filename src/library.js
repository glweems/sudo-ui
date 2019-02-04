import Vue from "vue";
import SudoNavbar from "@/components/Navbar/SudoNavbar"
import SudoHero from "@/components/Hero/SudoHero"

const Components = {
	SudoNavbar,
	SudoHero
};

Object.keys(Components).forEach(name => {
	Vue.component(name, Components[name]);
});

export default Components;