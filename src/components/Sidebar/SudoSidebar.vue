<template>
	<ul class="sidebar">
		<h3 v-if="title" class="title">{{title}}</h3>
		<li v-for="(item, i) in items" :key="i">
			<router-link :to="item">{{item}}</router-link>
		</li>
	</ul>
</template>

<script>
export default {
	name: "SudoSidebar",
	props: {
		items: { type: Array },
		title: { type: String }
	}
};
</script>

<style lang="scss" scoped>
	@import "@/scss/app.scss";

	ul {
		// overflow-x: hidden;
		padding: 0 60px 30px;
		position: relative;
		z-index: 1;
		line-height: 1.5;
		padding: 0;
		margin: 0;
		width: 300px;
		height: 3000px;
		@include background(light);
		@include color(secondary);
		li {
			padding-left: 1em;
			a {
				@include color(dark);
			}
		}
	}

	@include mobile {
		ul {
			display: none;
		}
	}
</style>