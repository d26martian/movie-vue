<style src="./NavBar.scss" lang="scss"></style>
<template>
  <div class="navbar">
    <div class="navbar_title">Усi вiдео</div>
    <div class="navbar_items">
      <div class="navbar_search">
        <Input></Input>
      </div>
      <div class="navbar_btn-group">
        <Icon name="grid" @action="handlerClick"></Icon>
        <Icon name="list" @action="handlerClick"></Icon>
      </div>
    </div>
  </div>
</template>

<script>
import Input from '@/ui/Input/Input'
import Icon from '@/ui/Icon/Icon'

export default {
  name: 'Navbar',
  data: () => ({}),
  components: {
    Input,
    Icon
  },
  methods: {
    handlerClick(name) {
      this.$emit('view', name)
    }
  },
  computed: {},
  mounted() {},
}
</script>