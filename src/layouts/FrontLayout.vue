<template lang="pug">
VAppBar(color="secondary")
  VContainer.d-flex.align-center.justify-center
    template(v-for="button in navItems" :key="button.to")
      VBtn.mx-1(:to="button?.to" color="text01" title="button.text" v-if="button.show")
        VAppBarTitle() {{ button.text }}
    VBtn.mx-1(@click="logout" color="text01" title="button.text" v-if="user.isLogin")
      VAppBarTitle() 登出
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

// 導覽列
const navItems = computed(() => {
    return [
    { to: "/news", text: "最新消息(武林告示)", show: !user.isLogin },
    { to: "/map", text: "店家地圖(行蹤地圖)", show: !user.isLogin },
    { to: "/about", text: "關於我們(江湖緣起)", show: !user.isLogin },
    { to: "/", text: "炙醉亭", show: !user.isLogin },
    { to: "/reservation", text: "線上訂位(俠客預約)", show: user.isLogin && !user.isAdmin },
    { to: "/menu", text: "線上菜單(英雄食典)", show: !user.isLogin },
    { to: "/login", text: "登入(同道相邀)", show: !user.isLogin },
    { to: '/admin', text: '管理', show: user.isLogin && user.isAdmin }
  ]
})

const logout = async () => {
  try {
    // 這邊的 delete 為 axios 方法，apiAuth連結至axios檔案取得 .env.development 的值
    await apiAuth.delete('/users/logout')
    // 呼叫 store 的 logout() 函式
    user.logout()
    Swal.fire({
      position: "center",
      icon: "success",
      title: "登出成功",
      showConfirmButton: false,
      timer: 1500
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