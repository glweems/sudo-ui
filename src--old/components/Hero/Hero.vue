<template>
	<div class="hero">
		<h1 class="heading">{{title}}</h1>
	</div>
</template>

<script>
export default {
	name: "Hero",
	props: { title: { type: String, required: false } }
};
</script>

<style lang="scss" scoped>
	@import "@/scss/app.scss";
	.hero {
		@extend %container-fluid;
		@extend %border-radius;
		@include background(dark);
		@include color(light);
	}
</style>