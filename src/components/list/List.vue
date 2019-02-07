<template>
  <ul class="list">
    <ListItem v-for="(item, index) in items" :key="index" :item="item" />
  </ul>
</template>

<script>
import ListItem from "./ListItem";
export default {
  name: "List",
  props: {
    items: {
      type: Array
    }
  },
  components: {
    ListItem
  }
};
</script>
