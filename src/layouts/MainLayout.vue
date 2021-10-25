<template>
  <div class="app-main-layout">
    <Sidebar></Sidebar>

    <main class="app-content">
      <div class="app-page">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar/Sidebar'

export default {
  name: 'main-layout',
  data: () => ({
    isOpen: true,
    loading: true
  }),
  components: {
    Sidebar
  },
  methods: {
    handlerClick(name) {
      console.log('icon', name)
    }
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
  width: 100%;
  overflow: scroll;
  padding: 25px;
}
</style>