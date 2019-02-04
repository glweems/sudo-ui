<template>
	<div class="docs">
		<!-- <SudoHero title="Documentation"/> -->
		<SudoSidebar title="title" :items="docs.components"/>
		<div class="content">
			<router-view/>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
	name: "Docs",
	computed: {
		...mapState(["docs"])
	}
};
</script>

<style lang="scss" scoped>
	@import "@/scss/app.scss";
	.docs {
		display: flex;
		justify-content: start;
	}
	.content {
		width: 100%;
		padding: 1em;

		@include background(muted);
	}
</style>