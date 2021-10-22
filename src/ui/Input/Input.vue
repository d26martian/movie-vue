<style src="./Input.scss" lang="scss"></style>
<template>
  <div class="input">
    <label>
      <input 
        type="text"
        :value="value"
        @input="handleInput($event)"
      >
    </label>
  </div>
</template>
<script>
export default {
  name: "Input",
  props: {
    value: {
      type: String,
      required: false,
      default: ""
    },
    label: {
      type: String,
      default: "Label"
    }
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value);
    },
  }
}
</script>
