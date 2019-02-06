<template>
	<div class="example">
		<h1>{{name}}</h1>
		<p>{{desc}}</p>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "Example",
	props: { name: { type: String }, desc: { type: String } }
};
</script>

<style lang="scss" scoped>
	@import "@/scss/sudo-ui.scss";
</style>