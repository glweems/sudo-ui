<template>
	<div class="hero">
		<h1 class="heading">HERO</h1>
	</div>
</template>

<script>
export default {
	name: "SudoHero"
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";
.hero {
	@extend %container-fluid;
	@include background(dark);
	@include color(light);
}
</style>