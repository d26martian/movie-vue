<template>
  <div class="app-main-layout">
    <Sidebar></Sidebar>

    <main class="app-content">
      <NavBar></NavBar>
      <div class="app-page">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar'
import Sidebar from '@/components/Sidebar/Sidebar'

export default {
  name: 'main-layout',
  data: () => ({
    isOpen: true,
    loading: true
  }),
  components: {
    NavBar,
    Sidebar
  },
  mounted() {},
  computed: {},
}
</script>
<style lang="scss">
.app-main-layout {
  display: flex;
  overflow: hidden;
  height: 100vh;
}
.app-content {
  overflow: scroll;
  padding: 25px;
}
.app-page {
  padding-top: 50px;
}
</style>