import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import { nextTick } from 'q';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
  },
  {
    path: '/cars',
    name: 'Cars',
    component: () => import(/* webpackChunkName: "cars" */ '../pages/Cars.vue')
  },
  {
    path: '/cars/:id',
    name: 'Car',
    component: () => import(/* webpackChunkName: "cardeetz" */ '../pages/CarDeetz.vue'),
    // for an individual route
    // beforeEnter: (to, from, next) => {
    //   // ...
    // }
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router

// for all routes
router.beforeEach((to, from, next) => {
  // if (to.name != "Home" && !isAuthenticated) {
  //   next({ name: "Home" })
  // }

  if (from.name == "Cars") {
    const answer = window.confirm("Are you sure you want to leave cars? You will lose your unsaved information.")
    if (answer) {
      next()
    } else {
      next(false)
    }
  } else {
    next()
  }
})