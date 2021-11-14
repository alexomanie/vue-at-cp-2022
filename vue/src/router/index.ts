import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Movies from '../components/Movies.vue'
import MovieDetail from '../components/MovieDetail.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Movies
  },
  {
    path: '/:movieId',
    component: MovieDetail
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
