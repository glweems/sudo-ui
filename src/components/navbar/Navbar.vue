<template>
	<nav class="navbar">
		<a :href="brand.link">{{ brand.name }}</a>
	</nav>
</template>
<script>
export default {
	name: "Navbar",
	props: { brand: { type: Object } }
};
</script>
<style lang="scss" scoped>
	@import "sudo-styling/scss/sudo-styling.scss";
	.navbar {
		height: 40px;
		display: flex;
		align-items: center;
		padding: 0 10px 0 10px;
		a {
			@include color(bg);
		}
		@include background(light);
		width: 100%;
	}
</style>
