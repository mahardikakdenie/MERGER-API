import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'LoginIndex',
      path: '/Login/index',
      redirect: '/login',
      component: () => import('@/views/dashboard/aunth/Index'),
      children: [
        {
          name: 'LOGIN',
          path: '/login',
          component: () => import('@/views/dashboard/aunth/Login'),
        },
      ],
    },
    {
      name: 'New Dashboard',
      path: '/',
      redirect: '',
      component: () => import('@/views/dashboard/dashboard/Index'),
      children: [
        {
          name: 'Landing',
          path: '',
          component: () => import('@/views/dashboard/dashboard/new/Dashboard'),
        },
      ],
    },
    {
      name: 'Detail',
      redirect: '/pizza',
      path: '/tables/pizza',
      component: () => import('@/views/dashboard/tables/Detail'),
      children: [
        {
          name: 'Pizza',
          path: '/pizza',
          component: () => import('@/views/dashboard/tables/Pizza'),
        },
        {
          name: 'PizzaDetail',
          path: '/pizza/:id/detail',
          component: () => import('@/views/dashboard/tables/PizzaDetail'),
        },
        {
          name: 'Keranjang',
          path: '/keranjangs',
          component: () => import('@/views/dashboard/page/KeranjangPizza'),
        },
      ],
    },
    {
      name: 'Testing',
      redirect: '/home',
      path: '/menu/testing',
      component: () => import('@/views/dashboard/component/Test'),
      children: [
        {
          name: 'Home',
          path: '/home',
          component: () => import('@/views/dashboard/component/Home'),
        },
        {
          name: 'FoodDetail',
          path: '/food/:id',
          component: () => import('@/views/dashboard/page/FoodDetail'),
        },
        {
          name: 'Keranjang',
          path: '/keranjang',
          component: () => import('@/views/dashboard/page/Keranjang'),
        },
      ],
    },
    {
      path: '/dashboard',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: '/dashboard',
          component: () => import('@/views/dashboard/Dashboard'),
        },
        // Pages
        {
          name: 'User Profile',
          path: '/pages/user',
          component: () => import('@/views/dashboard/pages/UserProfile'),
        },
        {
          name: 'Imdb Search',
          path: '/imdb',
          component: () => import('@/views/dashboard/imdb/Index'),
        },
        {
          name: 'Notifications',
          path: '/components/notifications',
          component: () => import('@/views/dashboard/component/Notifications'),
        },
        {
          name: 'Menu',
          path: '/menu/index',
          component: () => import('@/views/dashboard/component/Menu'),
        },
        {
          name: 'Icons',
          path: '/components/icons',
          component: () => import('@/views/dashboard/component/Icons'),
        },
        {
          name: 'Typography',
          path: '/components/typography',
          component: () => import('@/views/dashboard/component/Typography'),
        },
        // Tables
        {
          name: 'Regular Tables',
          path: '/tables/regular-tables',
          redirect: '/tables/index',
          component: () => import('@/views/dashboard/tables/Index'),
          children: [
            {
              name: 'IndexR',
              path: '/tables/index',
              component: () => import('@/views/dashboard/tables/RegularTables'),
            },
            {
              name: 'WPU Hut',
              path: '/tables/pizza1',
              component: () => import('@/views/dashboard/tables/Detail'),
            },
          ],
        },
        // Maps
        {
          name: 'Google Maps',
          path: '/maps/google-maps',
          component: () => import('@/views/dashboard/maps/GoogleMaps'),
        },
        // Upgrade
        {
          name: 'Upgrade',
          path: '/upgrade',
          component: () => import('@/views/dashboard/Upgrade'),
        },
      ],
    },
  ],
})
