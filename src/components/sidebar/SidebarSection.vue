<template>
  <div class="sidebar-section">
    <p>{{ section }}</p>
    <ul>
      <SidebarItem v-for="(item, index) in items" :key="index" :item="item" />
    </ul>
  </div>
</template>

<script>
import SidebarItem from "./SidebarItem";
export default {
  name: "SidebarSection",
  props: ["section", "items"],
  components: {
    SidebarItem
  }
};
</script>

<style scoped></style>
