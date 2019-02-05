<template>
	<button @click="pressed">{{text}}</button>
</template>

<script>
export default {
	name: "HamburgerMenu",
	props: {
		pressed: {
			type: Function,
			default: () => {
				console.log("Error: Prop 'pressed' missing ");
			}
		},
		text: {
			type: String,
			default: "Button"
		}
	}
};
</script>

<style lang="scss" scoped>
	@import "@/scss/app.scss";
	@include mobile {
		button {
			display: none;
		}
	}
</style>