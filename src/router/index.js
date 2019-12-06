import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Setting from '../views/Setting.vue'
import Profile from '../views/Profile.vue'
import Pageone from '../views/Pageone.vue'
import Pagetwo from '../views/Pagetwo.vue'
import Pagethree from '../views/Pagethree.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/profile', name: 'profile', component: Profile },
  { path: '/setting', name: 'setting', component: Setting },
  { path: '/page1', name: 'pageone', component: Pageone },
  { path: '/page2', name: 'pagetwo', component: Pagetwo },
  { path: '/page3', name: 'pagethree', component: Pagethree },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
