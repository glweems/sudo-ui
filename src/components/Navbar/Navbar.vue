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
</style>
