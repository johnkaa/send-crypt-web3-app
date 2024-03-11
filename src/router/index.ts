import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import ComingSoonPage from '@/pages/ComingSoonPage.vue'
import ErrorPage from '@/pages/ErrorPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/markets',
    component: ComingSoonPage
  },
  {
    path: '/portfolio',
    component: ComingSoonPage
  },
  {
    path: '/products',
    component: ComingSoonPage
  },
  {
    path: '/:pathMatch(.*)*',
    component: ErrorPage
  }
]

export default createRouter({
  history: createWebHistory(),
  routes: routes
})
