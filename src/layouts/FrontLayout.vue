<template lang="pug">
//- 手機版側邊欄
VNavigationDrawer(v-model="drawer" temporary location="right" v-if="isMobile" color="secondary")
  VList(nav)
    template(v-for="item in newsItems" :key="item.to" color="text01")
      VListItem(:to="item.to" v-if="item.show")
        template(#prepend)
          VIcon(:icon="item.icon")
        template(#append)
          VBadge(color="error" :content="user.cart" v-if="item.to === '/cart'" inline)
          VAppBarTitle {{ item.text }}
    template(v-for="item in newsItems" :key="item.to" color="text01")
      VListItem(:to="item.to" v-if="item.show")
        template(#prepend)
          VIcon(:icon="item.icon")
        template(#append)
          VBadge(color="error" :content="user.cart" v-if="item.to === '/cart'" inline)
          VAppBarTitle {{ item.text }}
    template(v-for="item in cartItems" :key="item.to" color="text01")
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
div.logo.xs-none
div.eaves.xs-none
div.bambooLeft.xs-none
div.bambooRight.xs-none
div.bambooCenterLeft.xs-none
div.bambooCenterLeft2.xs-none
div.bambooCenterRight.xs-none
VAppBar(color="secondary" style="position:fixed;top:45px;")
  //- 手機版
  template(v-if="isMobile")
    VContainer.d-flex.align-center.justify-end
      VAppBarNavIcon(@click="drawer = true" color="text01")
  template(v-else)
    VContainer.d-flex.align-center.justify-center
      template(v-for="button in newsItems" :key="button.to")
        VBtn.mx-1(:to="button?.to" color="text01" title="button.text" v-if="button.show")
          VIcon(:icon="button.icon")
          VAppBarTitle() {{ button.text }}
    VContainer.d-flex.align-center.justify-center
      template(v-for="button in cartItems" :key="button.to")
        VBtn.mx-1(:to="button?.to" color="text01" title="button.text" v-if="button.show")
          VIcon(:icon="button.icon")
          VAppBarTitle() {{ button.text }}
      template.d-flex.justify-end(v-if="user.isLogin")
        VBtn.mx-1(@click="logout" color="text01" title="button.text")
          template(#prepend)
            VIcon(icon="mdi-logout")
            VAppBarTitle 我要登出
//- 內容
VMain()
  RouterView(:key="$route.path")
</template>
<script setup>
import { useDisplay } from 'vuetify'
import { ref, computed, onMounted } from 'vue'
import { useUserStore } from '@/store/user'
import { useApi } from '@/composables/axios'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import gsap from 'gsap'

const { apiAuth } = useApi()
const router = useRouter()
const user = useUserStore()

// 手機版判斷
const { mobile } = useDisplay()
const isMobile = computed(() => mobile.value)

// 手機版測欄開關
const drawer = ref(false)


// 導覽列項目
const newsItems = computed(() => {
  return [
    { to: "/", text: "回到首頁", icon: "mdi-home", show: true },
    { to: "/news", text: "最新消息", icon: "mdi-newspaper", show: true },
    { to: "/map", text: "前往地圖", icon: "mdi-map-marker", show: true },
    { to: "/about", text: "關於本棧", icon: "mdi-folder-account", show: true },
  ]
})

const cartItems = computed(() => {
  return [
    // { to: "/reservation", text: "訂位", icon: "mdi-account-group", show: user.isLogin },
    { to: "/menu", text: "立即訂購", icon: "mdi-list-box", show: !user.isLogin },
    { to: "/cart", text: "來去購物", icon: "mdi-cart", show: user.isLogin },
    { to: "/orders", text: "購物清單", icon: "mdi-list-status", show: user.isLogin && !user.isAdmin },
    { to: "/login", text: "立即登入", icon: "mdi-login", show: !user.isLogin },
    // { to: "/register", text: "註冊", icon: "mdi-account-plus", show: !user.isLogin },
    { to: '/admin/adminProducts', text: '後台管理', icon: "mdi-cog", show: user.isLogin && user.isAdmin }
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

// 樹葉動畫
// .bambooLeft
// .bambooRight
// .bambooCenterLeft
// .bambooCenterLeft2
// .bambooCenterRight
onMounted(()=>{
  // 定義Gsap共享屬性
  const AnimationProps = {
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  }

  gsap.to('.bambooLeft', {
    ...AnimationProps,
    rotation: 55,
    transformOrigin: "left top"
  })

  gsap.to('.bambooRight', {
    ...AnimationProps,
    rotation: 95,
    transformOrigin: "100px 0"
  })

  gsap.to('.bambooCenterLeft', {
    ...AnimationProps,
    rotation: 110,
    transformOrigin: "50px 0"
  })

  gsap.to('.bambooCenterLeft2', {
    ...AnimationProps,
    rotation: 95,
    transformOrigin: "50px -20px"
  })

  gsap.to('.bambooCenterRight', {
    ...AnimationProps,
    rotation: 95,
    transformOrigin: "0 top"
  })
})
</script>

<style scoped lang="sass">
.bamboo
  width: 500px
  height: 600px 
  z-index: 9999
  position: fixed
  opacity: 80%
  pointer-events: none
  filter: drop-shadow(0 0 0 rgba(0,0,0,0.5))
  background-size: contain
  background-image: url('@/assets/BackGround/bg2.png')


.bambooLeft
  @extend .bamboo
  left: 8%
  top: -13%
  rotate: 60deg
.bambooRight
  @extend .bamboo
  right: -30%
  top: 40px
  rotate: 90deg
.bambooCenterLeft
  @extend .bamboo
  width: 150px
  top: -3%
  left: 25%
  rotate: 100deg
  transform: rotateX(180deg)
.bambooCenterLeft2
  @extend .bamboo
  width: 250px
  top: -3%
  left: 30.5%
  rotate: 100deg
  transform: rotateX(180deg)
.bambooCenterRight
  @extend .bamboo
  width: 200px
  top: -1%
  left: 65%
  rotate: 100deg

.eaves
  width: 100%
  height: 100px
  position: fixed
  top: -55px
  z-index: 2000
  filter: drop-shadow(10px 10px 10px rgba(0,0,0,0.5))
  background-repeat: repeat-x
  background-image: url('@/assets/BackGround/bg1.png')

.logo
  z-index: 9999
  width: 300px
  height: 110px
  position: fixed
  left: 50%
  top: 3%
  transform: translateX(-50%)
  background-image: url('@/assets/BackGround/logoBanner.png')
  background-size: contain
</style>
