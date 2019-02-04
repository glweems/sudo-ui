<template>
	<nav :class="navbar">
		<NavbarBrand v-if="brand" link="/" name="brand"/>
		<nav>
			<router-link v-for="page in pages" :to="page.link" :key="page.link">{{ page.name }}</router-link>
		</nav>
	</nav>
</template>

<script>
export default {
	name: "SudoNavbar",
	props: {
		brand: { type: String, required: false, default: null },
		pages: { type: Array, required: true }
	},
	components: {
		NavbarBrand: () =>
			import(/* webpackChunkName: "Navbar-Brand" */ "@/components//Navbar/NavbarBrand")
	},
	computed: {
		navbar() {
			return ["navbar", "between"];
		}
	}
};
</script>

<style lang="scss">
	@import "@/scss/app.scss";

	.navbar {
		margin: 1em;
		padding: 1em;
		align-content: center;
		@extend %flex-row;
		@extend %border-radius;
		@include background(light);
		.brand {
			font-weight: bold;
		}
		a {
			font-size: 16px;
			text-decoration: none;
			margin: 0;
			padding: 0;
			@include color(primary);
			margin-right: 1em;
			&:last-child {
				margin-right: 0;
			}
		}
	}
	.between {
		justify-content: space-between;
	}
</style>