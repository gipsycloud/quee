import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Setting from '../views/Setting.vue'
// import Profile from '../views/Profile.vue'
// import Pageone from '../views/Pageone.vue'
// import Pagetwo from '../views/Pagetwo.vue'
// import Pagethree from '../views/Pagethree.vue'

// Routes
import paths from './paths'

function route (path, view, name) {
  return {
    name: name || view,
    path,
    component: (resovle) => import(
      `@/views/${view}.vue`
    ).then(resovle)
  }
}


Vue.use(VueRouter)

// Create a new router
const router = new VueRouter({
  mode: 'history',
  routes: paths.map(path => route(path.path, path.view, path.name)).concat([
    { path: '*', redirect: '/' }
  ]),
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})

// vue.use(Meta)

// const routes = [
//   { path: '/', name: 'home', component: Home },
//   { path: '/profile', name: 'profile', component: Profile },
//   { path: '/setting', name: 'setting', component: Setting },
//   { path: '/page1', name: 'pageone', component: Pageone },
//   { path: '/page2', name: 'pagetwo', component: Pagetwo },
//   { path: '/page3', name: 'pagethree', component: Pagethree },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   // }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

export default router
