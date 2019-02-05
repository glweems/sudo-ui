<template>
	<div id="app">
		<SudoNavbar :pages="pages" :brand="brand"/>
		<router-view/>
		<!-- <main role="main">
			
		</main>-->
	</div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
	name: "App",
	created() {
		this.IS_DEVICE_MOBILE();
	},
	methods: {
		...mapMutations(["IS_DEVICE_MOBILE", "TEST"])
	},
	computed: {
		...mapState(["pages", "brand", "isMobileDevice"])
	}
};
</script>
<style lang="scss">
	@import "@/scss/app.scss";
</style>
