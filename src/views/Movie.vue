<template>
  <div class="movie">
    <div class="movie_row">
      <div class="movie_col" v-for="movie in movies" :key="movie.id">
        <Card :movie="movie"></Card>
      </div>
    </div>
  </div>
</template>
<script>
import Card from '@/components/Card/Card'
import { mapGetters } from 'vuex';

export default {
  name: 'Movie',
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
.movie {
  &_row {
    display: flex;
    flex-wrap: wrap;
  }
  &_col {
    flex: 0 33.3%;
  }
}
</style>

