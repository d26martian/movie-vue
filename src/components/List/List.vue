
<style src="./List.scss" lang="scss"></style>
<template>
  <div class="list">
    <div class="list_header" @click="toggle">{{ title }}</div>
    <div :class="classes">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'List',
  props: ['title'],
  data: () => ({
    open: true
  }),
  components: {},
  methods: {
    toggle() {
      this.open = !this.open
    }
  },
  computed: {
    classes() {
      return {
        'list_body': true,
        '-open': this.open,
      };
    },
  },
  mounted() {},
}
</script>