<template>
  <div class="home">
    <h3>Home</h3>
    <div class="home_row">
      <div class="home_col" v-for="movie in movies" :key="movie.id">
        <Card :movie="movie"></Card>
      </div>
    </div>
  </div>
</template>
<script>
import Card from '@/components/Card/Card'
import { mapGetters } from 'vuex';

export default {
  name: 'home',
  components: {
    Card
  },
  data: () => ({
    movies: []
  }),
  computed: {
    ...mapGetters(['getMovies']),
  },
  mounted() {
    this.movies = this.getMovies;
  },
  methods: {}
}
</script>
<style lang="scss">
.home {
  &_row {
    display: flex;
    flex-wrap: wrap;
  }
  &_col {
    flex: 0 33.3%;
  }
}
</style>

