<template lang="pug">
VAppBar(color="primary")
  VContainer.d-flex.align-center.justify-center
    VBtn(to="/news")
      VAppBarTitle(class="text01") 最新消息(武林告示)
    VBtn(to="/map")
      VAppBarTitle(style="color: #D9CD90;") 店家地圖(行蹤地圖)
    VBtn(to="/about")
      VAppBarTitle(style="color: #D9CD90;") 關於我們(江湖緣起)
    VBtn(to="/")
      VAppBarTitle(style="color: #D9CD90;") 炙醉亭
    VBtn(to="/reservation")
      VAppBarTitle(style="color: #D9CD90;") 線上訂位(俠客預約)
    VBtn(to="/menu")
      VAppBarTitle(style="color: #D9CD90;") 線上菜單(英雄食典)
    VBtn(to="/join")
      VAppBarTitle(style="color: #D9CD90;") 加入我們(同道相邀)
      
//- 內容
VMain
  RouterView(:key="$route.path")
</template>

<script setup>
import { useRouter } from 'vue-router'
</script>