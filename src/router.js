import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Main from './views/main'
import Login from './views/login'
import Home from './views/home'

import EmptyPage from './views/404/index.vue'
import NoAuthority from './views/404/403.vue'

import DemoRouter from './views/demo/router'
import AuthRouter from './views/auth/router'

Vue.use(Router)
NProgress.configure({ showSpinner: false })
const routes = [
  {
    path: '/404',
    component: EmptyPage,
    meta: {
      auth: '',
      title: ['404']
    }
  },
  {
    path: '/403',
    component: NoAuthority,
    meta: {}
  },
  {
    path: '/main',
    component: Home,
    name: 'main',
    meta: []
  },
  ...DemoRouter,
  ...AuthRouter
]

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/main',
      component: Main,
      children: routes
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  return next()
})

router.afterEach(route => {
  NProgress.done()
})

export default router

// export default new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: '/',
//       component: Login
//     }
//     // {
//     //   path: '/about',
//     //   name: 'about',
//     //   // route level code-splitting
//     //   // this generates a separate chunk (about.[hash].js) for this route
//     //   // which is lazy-loaded when the route is visited.
//     //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//     // }
//   ]
// })
