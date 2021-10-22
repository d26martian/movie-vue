<style src="./Button.scss" lang="scss"></style>
<template>
  <div class="button">
    <button
      :class="classes"
      @click="$emit('onClick')"
      v-on="$listeners"
      v-bind="$attrs"
    >
      {{ text }}
    </button>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  name: "Button",
  props: {
    text: {
      type: String,
      default: "Send"
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'button__btn': true,
        'button__active': this.active,
      };
    },
  }
}
</script>