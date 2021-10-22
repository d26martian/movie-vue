<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout'
import MainLayout from '@/layouts/MainLayout'

export default {
  name: 'App',
  components: {
    EmptyLayout,
    MainLayout
  },
  computed: {
    layout() {
      console.log(this.$route.meta);
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  async mounted() {
    await this.$store.dispatch('fetchMovies');
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Roboto', sans-serif;
}
</style>
