<template>
	<div class="sidebar">
		<!-- Collapsed Sidebar -->
		<div class="collapsed-sidebar">
			<p>sidebar is {{ isOpen }}</p>
			<button class="sidebar-toggle" @click="toggleSidebar">hi</button>
		</div>

		<div v-if="sections" :class="[{ active: classObject.active }, classObject.hidden]">
			<SidebarSection
				v-for="(section, key) in sections"
				:key="key"
				:items="section.items"
				:section="key"
			/>
		</div>

		<div v-if="items" class="items">
			<SidebarItem v-for="(item, index) in items" :key="index" :item="item"/>
		</div>
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
	},
	data() {
		return {
			isOpen: false,
			classObject: {
				active: "sidebar-content",
				hidden: ""
			}
		};
	},
	methods: {
		toggleSidebar() {
			this.isOpen = !this.isOpen;
			if (this.isOpen) {
				this.classObject.hidden = "hidden";
			}
			if (!this.isOpen) {
				this.classObject.hidden = "";
			}
		}
	}
};
</script> 

<style lang="scss">
	@import "@/scss/sudo-ui.scss";
	.sidebar {
		padding: 0 1em;
		@include background(dark);
	}
	.collapsed-sidebar {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-content: center;
		align-items: center;
	}

	.hidden {
		@media only screen and (max-width: 576px) {
			.sidebar-section {
				display: none;
			}
		}
	}
</style>
