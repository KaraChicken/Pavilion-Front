// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/front/HomeView.vue'),
        meta: {
          title: '炙醉亭',
          login: false,
          admin: false
        }
      },
      {
        path: 'news',
        name: 'News',
        component: () => import('@/views/front/NewsView.vue'),
        meta: {
          title: '炙醉亭 | 武林告示',
          login: false,
          admin: false
        }
      },
      {
        path: 'map',
        name: 'Map',
        component: () => import('@/views/front/MapView.vue'),
        meta: {
          title: '炙醉亭 | 行蹤地圖',
          login: false,
          admin: false
        }
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/front/AboutView.vue'),
        meta: {
          title: '炙醉亭 | 江湖緣起',
          login: false,
          admin: false
        }
      },
      {
        path: 'reservation',
        name: 'Reservation',
        component: () => import('@/views/front/ReservationView.vue'),
        meta: {
          title: '炙醉亭 | 俠客預約',
          login: true,
          admin: false
        }
      },
      {
        path: 'menu',
        name: 'Menu',
        component: () => import('@/views/front/MenuView.vue'),
        meta: {
          title: '炙醉亭 | 英雄食典',
          login: false,
          admin: false
        }
      },
      {
        path: 'join',
        name: 'Join',
        component: () => import('@/views/front/JoinView.vue'),
        meta: {
          title: '炙醉亭 | 同道相邀',
          login: false,
          admin: false
        }
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('@/layouts/admin/Layout.vue'),
    children: [
      {
        path: '',
        name: 'AdminHome',
        component: () => import('@/views/admin/HomeView.vue'),
        meta: {
          login: true,
          admin: false
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to) => {
  document.title = to.meta.title
})

export default router
