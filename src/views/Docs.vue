<template>
	<div class="docs">
		<!-- <SudoHero title="Documentation"/> -->
		<SudoSidebar v-if="sidebarOpen" title="title" :items="docs.components"/>
		<div class="content">
			<h1>Hero</h1>
			<h4>Hero Component Settings</h4>
			<SudoHero title="Hero Component"/>
			<h1>Hero</h1>
			<h4>Hero Component Settings</h4>
			<HambugerButton text="Hero Component"/>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
	name: "Docs",
	computed: {
		...mapState(["docs", "sidebarOpen"])
	}
};
</script>

<style lang="scss" scoped>
	@import "@/scss/app.scss";
	.docs {
		display: flex;
		justify-content: flex-start;
		align-content: flex-start;
		align-items: flex-start;
	}
	.content {
		width: 100%;
		padding: 1em;
		@include background(muted);
	}
</style>