<template>
	<nav :class="navbar">
		<div class="left">
			<HambugerButton/>
			<NavbarBrand v-if="brand" link="/" name="brand"/>
		</div>
		<nav>
			<router-link v-for="page in pages" :to="page.link" :key="page.link">{{ page.name }}</router-link>
		</nav>
	</nav>
</template>

<script>
import { mapState, mapMutations } from "vuex";
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
	methods: {
		...mapMutations(["TOGGLE_SIDEBAR"])
	},
	computed: {
		...mapState(["isMobileDevice"]),
		navbar() {
			return ["navbar", "between"];
		}
	}
};
</script>

<style lang="scss">
	@import "@/scss/app.scss";

	.navbar {
		display: flex;
		flex-direction: row;
		justify-content: start;
		align-content: center;

		margin: 1em;
		padding: 1em;
		@extend %border-radius;
		@include background(light);

		.left {
			display: flex;
			flex-direction: row;
			justify-content: start;
			align-content: center;
		}

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