<style src="./Card.scss" lang="scss"></style>
<template>
  <div class="card">
    <div class="card_header">
      <img :src="movie.covers.main" alt="">
    </div>
    <div class="card_body">
      <div class="card_text">{{ movie.title }}</div>
      <div class="card_button">
        <Button text="Дивитися" @onClick="handleClick" :active="movie.access" />
      </div>
    </div>
  </div>
</template>
<script>
import Button from '@/ui/Button/Button'

export default {
  name: 'card',
  components: {
    Button
  },
  props: ['movie'],
  data: () => ({}),
  // watch: {
  //   movies: {
  //     handler: function(newValue) {
  //       this.movies = this.getMovies; 
  //         console.log("New age: " + newValue)
  //     },
  //     deep: true
  //   }
  // },
  computed: {},
  mounted() {},
  methods: {
    handleClick() {
      console.log('click');
    }
  }
}
</script>