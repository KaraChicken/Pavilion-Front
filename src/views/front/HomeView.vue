<template lang="pug">
//- 輪播圖片素材取自部落客 圍事小哥
//- 版權皆由原作者持有，此素材僅做學習用途非商業使用
//- https://www.walkerland.com.tw/article/view/354452
Swiper.mySwiper(
    :spaceBetween="30"
    :centeredSlides="true"
    :scrollbar={
      hide: true,
    }
    :autoplay={
      delay: 3500,
      disableOnInteraction: false,
    }
    :navigation="true"
    :modules="modules"
)
  //- SwiperSlide(v-for="Item in slideItem" :key="slideItem.img")
  //-   Img(:src="`../src/assets/BBQ/${Item.img}.jpg`")
  //-   Div.slideText {{ slideItem.text }}

//- P 融合客棧的獨特元素，精心特調的燒烤醬料宛如一瓶難得的陳年美酒，經過大廚巧妙調製，
//-   | 猶如客棧內的珍貴珍藏，每一滴都沉澱著風華絕代的瑰麗故事。
//- P 烈火在燒烤爐中優雅舞動，仿佛客棧內的燈火閃爍，構築出一種溫馨而充滿情調的氛圍。
//- P 食材在恰到好處的火侯下，彷彿在客棧那段美好時光中悠然綻放，每一口都是一曲對旅途美好回憶的味蕾奏鳴曲。
</template>

<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import 'swiper/css/scrollbar';
  import { Autoplay, Scrollbar, Pagination, Navigation } from 'swiper/modules';

  const modules = [Autoplay, Scrollbar, Pagination, Navigation];

  const slideItem = [
    { img: 1 },
    { img: 2 },
    { img: 3 },
    { img: 4 },
    { img: 5 }
  ]
</script>

<style scoped>
.mySwiper {
  height: calc(100vh - 64px);
  width: 100%;
}

.mySwiper .swiper-slide {
  height: 100%;
  width: 100%;
}

.mySwiper .swiper-slide img {
  width: 100%;
  height: 100%;
  background-size:cover;
  object-fit: cover; 
}
</style>