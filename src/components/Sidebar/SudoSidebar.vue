<template>
	<ul class="sidebar">
		<h3 v-if="title" class="title">{{title}}</h3>
		<li v-for="(item, i) in items" :key="i">
			<router-link :to="item">{{item.name}}</router-link>
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
		padding: 0;
		margin: 0;
		width: 300px;
		height: 1000px;
		@include background(light);
		@include color(secondary);
		li {
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