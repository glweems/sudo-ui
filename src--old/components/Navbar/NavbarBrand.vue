<template>
	<div class="brand">
		<img v-if="img" :src="img">
		<router-link :to="link">{{ name }}</router-link>
	</div>
</template>

<script>
export default {
	name: "NavbarBrand",
	props: {
		name: { type: String },
		link: { type: String },
		img: { type: String }
	}
};
</script>

<style lang="scss" scoped>
	a {
		// color: ;
	}
</style>