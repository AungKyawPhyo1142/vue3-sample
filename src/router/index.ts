import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllListPage from '../views/shopList/AllList.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    // alias is like redirect but u can do it inside
    alias: '/contact-us',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/allList',
    name: 'allList',
    component: AllListPage
  },
  {
    // if about-us is in url, redirect to about
    path: '/about-us',
    name: 'about-us',
    redirect: '/about'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
