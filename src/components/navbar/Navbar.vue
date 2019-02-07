<template>
	<nav class="navbar">
		<a :href="brand.link">{{ brand.name }}</a>
	</nav>
</template> <script>
export default {
	name: "Navbar",
	props: { brand: { type: Object, default: { name: "Sudo-Ui", link: "/" } } }
};
</script> <style lang="scss" scoped>
	@import "@/scss/sudo-ui.scss";
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
