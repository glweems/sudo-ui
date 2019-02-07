<template>
	<div class="sidebar">
		<template v-if="sections">
			<SidebarSection
				v-for="(section, key) in sections"
				:key="key"
				:items="section.items"
				:section="key"
			/>
		</template>
		<template v-if="items">
			<SidebarItem v-for="(item, index) in items" :key="index" :item="item"/>
		</template>
	</div>
</template> 

<script>
import SidebarSection from "./SidebarSection";
import SidebarItem from "./SidebarItem";
export default {
	name: "Sidebar",
	props: ["items", "sections"],
	components: {
		SidebarSection,
		SidebarItem
	}
};
</script> 

<style lang="scss" scoped>
	@import "@/scss/sudo-ui.scss";
	.sidebar {
		padding: 1em;
		@include background(dark);
	}
</style>
