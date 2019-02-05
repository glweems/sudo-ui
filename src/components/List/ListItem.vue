<template>
	<li>{{item}}</li>
</template>

<script>
export default {
	name: "ListItem",
	props: {
		item: {
			required: true,
			default: "List Item"
		}
	}
};
</script>

<style scoped>
</style>