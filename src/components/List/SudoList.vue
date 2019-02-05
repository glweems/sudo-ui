<template>
	<ul>
		<ListItem v-for="(item, index) in items" :key="index" :item="item">{{item}}</ListItem>
	</ul>
</template>

<script>
import ListItem from "@/components/List/ListItem";
export default {
	name: "SudoList",
	props: {
		items: {
			type: Array,
			default: ["You", "Need", "To", "Pass", "An", "Array"]
		}
	},
	components: { ListItem }
};
</script>

<style lang="scss" scoped>
	@import "@/scss/app.scss";
</style>