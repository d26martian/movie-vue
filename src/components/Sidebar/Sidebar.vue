
<style src="./Sidebar.scss" lang="scss"></style>
<template>
  <div class="sidebar">
    <div class="sidebar_body">
      <List title="Видео">
        <template v-slot:body>
          <Checkbox text="Акцiя"></Checkbox>
          <Checkbox text="Популярнi"></Checkbox>
          <Checkbox text="Новинки"></Checkbox>
        </template>
      </List>
      <List title="Теми">
        <template v-slot:body>
          <div class="sidebar_list">
            <a href="">Всi теми</a>
            <a href="">Акцизный податок</a>
            <a href="">Валюта</a>
            <a href="">Виробництво i собiвартiсть</a>
            <a href="">Вiдпустки</a>
            <a href="">Вiдрядження</a>
          </div>
        </template>
      </List>
    </div>
  </div>
</template>

<script>
import List from '@/components/List/List'
import Checkbox from '@/ui/Checkbox/Checkbox'

export default {
  name: 'sidebar',
  data: () => ({}),
  components: {
    List,
    Checkbox
  },
  methods: {},
  computed: {},
  mounted() {},
}
</script>