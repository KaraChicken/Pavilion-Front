<template lang="pug">
VAppBar(color="primary")
  VContainer.d-flex.align-center.justify-center
    VBtn
      VAppBarTitle (@click="navigateToPage('../views/front/NewsView.vue')") 最新消息(武林告示)
    VBtn
      VAppBarTitle 店家地圖(行蹤地圖)
    VBtn
      VAppBarTitle 關於我們(江湖緣起)
    VBtn
      VAppBarTitle 炙醉亭
    VBtn
      VAppBarTitle 線上訂位(俠客預約)
    VBtn
      VAppBarTitle 線上菜單(英雄食典)
    VBtn
      VAppBarTitle 加入我們(同道相邀)
      
//- 內容
VMain
  RouterView(:key="$route.path")
</template>