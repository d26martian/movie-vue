<template>
  <div class="movie">
    <NavBar @view="handlerView"></NavBar>
    <div :class="classes">
      <div class="movie_col" v-for="movie in this.getMovies" :key="movie.id">
        <Card :movie="movie" :view="view"></Card>
      </div>
    </div>
  </div>
</template>
<script>
import Card from '@/components/Card/Card'
import NavBar from '@/components/NavBar/NavBar'
import { mapGetters } from 'vuex';

export default {
  name: 'Movie',
  components: {
    Card,
    NavBar
  },
  data: () => ({
    view: 'grid'
  }),
  computed: {
    ...mapGetters(['getMovies']),
    classes() {
      return {
        'movie_row': true,
        'movie_row-grid': this.view === "grid",
        'movie_row-list': this.view === "list",
      };
    },
  },
  mounted() {},
  methods: {
    handlerView(view) {
      this.view = view
    }
  }
}
</script>
<style lang="scss">
.movie {
  &_row {
    display: flex;
    flex-wrap: wrap;

    &-list {
      flex-direction: column;
    }
  }
  &_col {
    flex: 0 33.3%;

    &-list {
      flex: 1;
    }
  }
}
</style>

