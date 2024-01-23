<template lang="pug">
//- 輪播圖片素材取自部落客 圍事小哥
//- 版權皆由原作者持有，此素材僅做學習用途非商業使用
//- https://www.walkerland.com.tw/article/view/354452
Swiper(pagination="pagination" :modules="modules" class="mySwiper")
  SwiperSlide 
    Img(src="../src/assets/1.jpg")
  SwiperSlide 
    Img(src="../src/assets/2.jpg")
  SwiperSlide 
    Img(src="../src/assets/3.jpg")
  SwiperSlide 
    Img(src="../src/assets/4.jpg")
  SwiperSlide 
    Img(src="../src/assets/5.jpg")
</template>

<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import { Navigation } from 'swiper/modules';
  
  const  modules = [Navigation];

</script>

<style scoped>
.mySwiper {
  width: 100vw;
  height: 100vh;
}

.mySwiper .swiper-slide {
  width: 100vw;
  height: 100vh;
}

.mySwiper .swiper-slide img {
  width: 100vw;
  height: 100vh;
  object-fit: cover; 
}
</style>