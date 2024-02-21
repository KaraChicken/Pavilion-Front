// Composables
import { createRouter, createWebHistory, START_LOCATION } from 'vue-router'
import { useUserStore } from '@/store/user'

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
        path: 'login',
        name: 'Login',
        component: () => import('@/views/LoginView.vue'),
        meta: {
          title: '炙醉亭 | 同道相邀',
          login: false,
          admin: false
        }
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/RegisterView.vue'),
        meta: {
          title: '炙醉亭 | 同道相邀',
          login: false,
          admin: false
        }
      },
      {
        path: 'products/:id',
        name: 'Product',
        component: () => import('@/views/front/ProductView.vue'),
        meta: {
          title: '炙醉亭 | 商品資訊',
          login: true,
          admin: false
        }
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('@/views/front/CartView.vue'),
        meta: {
          title: '炙醉亭 | 購物車',
          login: true,
          admin: false
        }
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('@/views/front/OrdersView.vue'),
        meta: {
          title: '炙醉亭 | 購物車',
          login: true,
          admin: false
        }
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('@/layouts/ADminLayout.vue'),
    children: [
      {
        path: 'adminHome',
        name: 'AdminHome',
        component: () => import('@/views/admin/HomeView.vue'),
        meta: {
          title: '管理選單',
          login: true,
          admin: true
        }
      },
      {
        path: 'adminOrders',
        name: 'AdminOrders',
        component: () => import('@/views/admin/OrdersView.vue'),
        meta: {
          title: '訂單管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'adminProducts',
        name: 'AdminProducts',
        component: () => import('@/views/admin/ProductsView.vue'),
        meta: {
          title: '商品管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'adminNews',
        name: 'AdminNews',
        component: () => import('@/views/admin/NewsView.vue'),
        meta: {
          title: '消息公布',
          login: true,
          admin: true
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

router.beforeEach(async (to, from, next) => {
  const user = useUserStore()

  if (from === START_LOCATION) {
    await user.getProfile()
  }

  if (user.isLogin && ['/register', '/login'].includes(to.path)) {
    // 如果有登入，要去註冊或登入頁，重新導向回首頁
    next('/')
  } else if (to.meta.login && !user.isLogin) {
    // 如果要去的頁面要登入，但是沒登入，重新導向回登入頁
    next('/login')
  } else if (to.meta.admin && !user.isAdmin) {
    // 如果要去的頁面要管理員，但是不是管理員，重新導向回首頁
    next('/')
  } else {
    // 不重新導向
    next()
  }
})

export default router
