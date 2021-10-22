
<style src="./Sidebar.scss" lang="scss"></style>
<template>
  <div class="sidebar">
    <div class="sidebar_body">
      <List title="Видео">
        <template v-slot:body>
          <p>List</p>
        </template>
      </List>
      <List title="Теми">
        <template v-slot:body>
          <p>List</p>
        </template>
      </List>
    </div>
  </div>
</template>

<script>
import List from '@/components/List/List'

export default {
  name: 'sidebar',
  data: () => ({}),
  components: {
    List
  },
  methods: {},
  computed: {},
  mounted() {},
}
</script>