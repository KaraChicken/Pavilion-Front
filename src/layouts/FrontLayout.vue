<template lang="pug">
VAppBar(color="secondary")
  VContainer.d-flex.align-center
    template(v-for="(button, index) in navItems" :key="index")
      VBtn(:to="button.to" color="text01")
        VAppBarTitle(v-if="navItems.show") {{ button.text }}
    VBtn(:to="button.to" color="text01")
      VAppBarTitle(prepend-icon="mdi-logout" v-if="user.isLogin" @click="logout") 登出
//- 內容
VMain
  RouterView(:key="$route.path")
</template>
<script setup>
import { useDisplay } from 'vuetify'
import { ref, computed } from 'vue'
import { useUserStore } from '@/store/user'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'

const { apiAuth } = useApi()
const router = useRouter()
const createSnackbar = useSnackbar()
const user = useUserStore()

// 導覽列
const navItems = computed(() => {
    return [
    { to: "/news", text: "最新消息(武林告示)", show: !user.isLogin },
    { to: "/map", text: "店家地圖(行蹤地圖)", show: !user.isLogin },
    { to: "/about", text: "關於我們(江湖緣起)", show: !user.isLogin },
    { to: "/", text: "炙醉亭", show: !user.isLogin },
    { to: "/reservation", text: "線上訂位(俠客預約)", show: user.isLogin },
    { to: "/menu", text: "線上菜單(英雄食典)", show: !user.isLogin },
    { to: "/join", text: "登入(同道相邀)", show: !user.isLogin }
  ]
})

const logout = async () => {
  try {
    // 這邊的 delete 為 axios 方法，apiAuth連結至axios檔案取得 .env.development 的值
    await apiAuth.delete('/user/logout')
    // 呼叫 store 的 logout() 函式
    user.logout()
    createSnackbar({
      text: '登出成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 5000,
        color: 'Success',
        location: 'bottom'
      }
    })
  } catch (error) {

  }
}

</script>