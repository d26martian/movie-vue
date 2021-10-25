<style src="./Icon.scss" lang="scss"></style>
<template>
  <div :class="classes" @click="$emit('action', name)"></div>
</template>
<script>
export default {
  inheritAttrs: false,
  name: "Icon",
  props: {
    name: {
      type: String,
      default: "grid"
    },
  },
  computed: {
    classes() {
      return {
        'icon': true,
        'icon_grid': this.name === "grid",
        'icon_list': this.name === "list",
      };
    },
  }
}
</script>