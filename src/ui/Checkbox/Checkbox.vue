<style src="./Checkbox.scss" lang="scss"></style>
<template>
  <div class="checkbox">
    <label class="checkbox__group">
      <input
        type="checkbox"
        v-model="selected"
        :checked="true"
        :disabled="disabled" 
        class="checkbox__input"
      />
      <span :class="classes"></span>
      <div class="checkbox__text" v-if="text">{{ text }}</div>
    </label>
  </div>
</template>
<script>
export default {
  name: "Checkbox",
  props: ['text'],
  // props: {
  //   text: {
  //     type: String,
  //     required: false,
  //     default: ""
  //   },
  //   checked: {
  //     type: Boolean,
  //     required: false
  //   },
  //   disabled: {
  //     type: Boolean,
  //     required: false
  //   }
  // },
  selected: {
    prop: "checked",
    event: "change"
  },
  // watch: {
  //   checked: {
  //     immediate: true,
  //     handler(val) {
  //       this.checked = val;
  //     }
  //   }
  // },
  computed: {
    classes() {
      return {
        'checkbox__icon': true,
        [`checkbox__icon--primary`]: this.color,
        [`checkbox__icon--disabled`]: this.disabled,
        [`checkbox__icone`]: this.disabled,
      };
    },
    // unchecked() {
    //   return this.checked = false
    // },
    selected: {
      get() {
        return this.checked;
      },
      set(val) {
        this.$emit("change", val);
      }
    }
  }
};
</script>
