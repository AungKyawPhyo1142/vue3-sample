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
    path: '/about/',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/homePage',
    name: 'homePage',
    component: ()=> import('../views/HomePage.vue'),
    // middleware guard
    // before Entering this page (to,from,next)
    // to => where do u want to go
    // from => where did u come from
    // next() -> let u do something if u come from defined page
    beforeEnter: (to,from,next)=>{
      // if u come from loginPage url, u can go to HomePage
      // else, go loginPage
      if(from.name == 'loginPage'){
        next();
      }
      else {
        next('loginPage');
      }
    }
  },
  {
    path: '/contact/:name/:age',
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
  {
    path: '/loginPage',
    name: '/loginPage',
    component: import('../views/LoginPage.vue')
  },
  {
    // if the page(url) doesn't exit, go HomeVue
    path: '/:pathMatch(.*)*',
    component: ()=> import('../views/404_Page.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
