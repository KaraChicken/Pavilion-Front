<template lang="pug">
VCantainer
  H1(class="text-center") 英雄食典
  VRow
    VCol(v-for="(img, index) in 15" :key="index")
      Div(style="width: 5rem; height: 5rem;")
        Img(style="width: 100%; height: 100%" :src="`../src/assets/BBQ/${img}.jpg`")
</template>