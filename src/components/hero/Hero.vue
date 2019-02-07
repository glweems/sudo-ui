<template>
  <div class="hero">
    <h1 class="heading">{{ title }}</h1>
    <h4 class="subtitle">{{ subtitle }}</h4>
    <p class="msg">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    title: { type: String },
    subtitle: { type: String },
    msg: { type: String }
  }
};
</script>

<style lang="scss" scoped>
@import "sudo-styling/scss/sudo-styling.scss";
.hero {
  text-align: center;
  @extend %container-fluid;
  @extend %border-radius;
  @include background(dark);
  @include color(light);
}
</style>
