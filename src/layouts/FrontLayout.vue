<template lang="pug">
//- 手機版側邊欄
VNavigationDrawer(v-model="drawer" temporary location="right" v-if="isMobile" color="secondary")
  VList(nav)
    template(v-for="item in navItems" :key="item.to" color="text01")
      VListItem(:to="item.to" v-if="item.show")
        template(#prepend)
          VIcon(:icon="item.icon")
        template(#append)
          VBadge(color="error" :content="user.cart" v-if="item.to === '/cart'" inline)
          VAppBarTitle {{ item.text }}
    VListItem(v-if="user.isLogin" @click="logout")
      template(#prepend)
        VIcon(icon="mdi-logout")
      template(#append)
        VAppBarTitle 登出
//- 導覽列
VAppBar(color="secondary")
  //- 手機版
  template(v-if="isMobile")
    VContainer.d-flex.align-center.justify-end
      VAppBarNavIcon(@click="drawer = true" color="text01")
  template(v-else)
    VContainer.d-flex.align-center.justify-center
      template(v-for="button in navItems" :key="button.to")
        VBtn.mx-1(:to="button?.to" color="text01" title="button.text" v-if="button.show")
          VIcon(:icon="button.icon")
          VAppBarTitle() {{ button.text }}
      VBtn.mx-1(@click="logout" color="text01" title="button.text" v-if="user.isLogin")
        template(#prepend)
          VIcon(icon="mdi-logout")
          VAppBarTitle 登出
//- 內容
VMain()
  RouterView(:key="$route.path")
</template>
<script setup>
import { useDisplay } from 'vuetify'
import { ref, computed } from 'vue'
import { useUserStore } from '@/store/user'
import { useApi } from '@/composables/axios'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

const { apiAuth } = useApi()
const router = useRouter()
const user = useUserStore()

// 手機版判斷
const { mobile } = useDisplay()
const isMobile = computed(() => mobile.value)

// 手機版測欄開關
const drawer = ref(false)

// 導覽列項目
const navItems = computed(() => {
    return [
    { to: "/news", text: "最新消息", icon: "mdi-newspaper", show: (!user.isLogin || user.isLogin) || user.isAdmin },
    { to: "/map", text: "地圖", icon: "mdi-map-marker", show: (!user.isLogin || user.isLogin) && !user.isAdmin },
    { to: "/about", text: "關於", icon: "mdi-folder-account", show: (!user.isLogin || user.isLogin) && !user.isAdmin },
    { to: "/", text: "首頁", icon: "mdi-home", show: (!user.isLogin || user.isLogin) && !user.isAdmin },
    { to: "/reservation", text: "訂位", icon: "mdi-account-group", show: user.isLogin && !user.isAdmin },
    { to: "/menu", text: "訂購", icon: "mdi-list-box", show: user.isLogin || user.isAdmin },
    { to: "/cart", text: "購物車", icon: "mdi-cart", show: user.isLogin },
    { to: "/orders", text: "訂單", icon: "mdi-list-status", show: user.isLogin || user.isAdmin },
    { to: "/login", text: "登入", icon: "mdi-login", show: !user.isLogin },
    // { to: "/register", text: "註冊", icon: "mdi-account-plus", show: !user.isLogin },
    { to: '/admin', text: '管理', icon: "mdi-cog", show: user.isLogin && user.isAdmin }
  ]
})

const logout = async () => {
  try {
    Swal.fire({
      title: "登出嗎?",
      text: "按下確定鍵登出。",
      icon: "question",
      showDenyButton: true,
      confirmButtonText: "確定",
      denyButtonText: `取消`
    }).then(async (result) => {
      if (result.isConfirmed) {
        await Swal.fire({
          title: "登出成功",
          text: "您即將登出...",
          icon: "success",
          showConfirmButton: false,
          timer: 800
        })
        // 這邊的 delete 為 axios 方法，apiAuth連結至axios檔案取得 .env.development 的值
        await apiAuth.delete('/users/logout')
        // 呼叫 store 的 logout() 函式
        user.logout()
      } else if (result.isDenied) {
        Swal.fire({
          title: "登出取消",
          icon: "info",
          showConfirmButton: false,
          timer: 500
        })
      }
    });
    router.push('/')
  } catch (error) {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "登出失敗",
      confirmButtonText: "確定",
    });
  }
}
</script>