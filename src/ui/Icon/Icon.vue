<template>
  <div :class="classes"></div>
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
        'iconlist': this.name === "list",
      };
    },
  }
}
</script>
<style lang="scss">
.icon {
  $this: &;
  width: 27px;
  height: 27px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &_grid {
    background-image: url('../../assets/grid.png');
  }
  &_list {
    background-image: url('../../assets/list.png');
  }
}
</style>