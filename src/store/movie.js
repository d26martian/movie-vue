export default {
  state: {
    movies: []
  },
  mutations: {
    setMovies(state, data) {
      state.movies = data
    },
  },
  actions: {
    async fetchMovies({commit}) {
      const data = await fetch('https://storage.7eminar.ua/content/test_task_front/data.json')
        .then((response) => response.json())
        .then(data => {
            // do some stuff
            return data;
        })
        .catch(error => {
            return error;
        });
      commit('setMovies', data)
    }
  },
  getters: {
    getMovies: state => state.movies
  }
}