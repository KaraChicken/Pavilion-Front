<template lang="pug">
VAppBar(color="secondary")
  VContainer.d-flex.align-center
    VBtn(to="/news" color="text01")
      VAppBarTitle 最新消息(武林告示)
    VBtn(to="/map" color="text01")
      VAppBarTitle 店家地圖(行蹤地圖)
    VBtn(to="/about" color="text01")
      VAppBarTitle 關於我們(江湖緣起)
    VBtn(to="/" color="text01")
      VAppBarTitle 炙醉亭
    VBtn(to="/reservation" color="text01")
      VAppBarTitle 線上訂位(俠客預約)
    VBtn(to="/menu" color="text01")
      VAppBarTitle 線上菜單(英雄食典)
    VBtn(to="/join" color="text01")
      VAppBarTitle 加入我們(同道相邀)
  VBtn() 登入
//- 內容
VMain
  RouterView(:key="$route.path")
</template>
<script setup>
import { useRouter } from 'vue-router'
</script>