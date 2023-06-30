import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD
import HomeView from '@/views/HomeView.vue'
=======
import HomeView from '../views/HomeView.vue'
>>>>>>> bd7d5ba2cf1295672b6a910625452f725bb14369

const routes = [
  {
    path: '/',
    name: 'home',
<<<<<<< HEAD
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/Products-View.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/Product-View.vue')
  }
]

=======
    component: HomeView,
  },
  {
    path: '/products/:id',
    name: 'product',
    component: () => import ("../views/SingleHomeView.vue"),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

]
>>>>>>> bd7d5ba2cf1295672b6a910625452f725bb14369

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
