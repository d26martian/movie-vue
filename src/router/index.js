import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    // meta: {layout: 'main'},
    component: () => import('../views/Home.vue')
  },
  {
    path: '/movie',
    name: 'movie',
    meta: {layout: 'main'},
    component: () => import('../views/Movie.vue')
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if ( from.name == 'About' ) {
      next(false);
  } else {
      next();
  }
});

export default router
