<template>
	<div id="app">
		<SudoNavbar :pages="pages" :brand="brand"/>
		<router-view/>
	</div>
</template>
<script>
import { mapState } from "vuex";
export default {
	name: "App",
	computed: {
		...mapState(["pages", "brand"])
	}
};
</script>
<style lang="scss">
	@import "@/scss/app.scss";
</style>
