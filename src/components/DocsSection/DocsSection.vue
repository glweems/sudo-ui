<template>
	<div class="DocsSection">
		<h1>{{ name }}</h1>
		<p>{{ desc }}</p>
		<!-- <ul>
			<li>
				<p>title</p>
				<small>subtitle</small>
			</li>
		</ul>-->
		<slot></slot>
	</div>
</template>

<script>
import CodeSnippet from "../CodeSnippet/CodeSnippet";
export default {
	name: "DocsSection",
	props: { name: { type: String }, desc: { type: String } },
	components: { CodeSnippet }
};
</script>

<style lang="scss">
	// @import "sudo-styling/scss/sudo-styling.scss";
	.example {
		height: 90vh;
		// border-bottom: 2px solid map-get($colors, dark);
	}
	ul {
		list-style: default !important;
	}
</style>
