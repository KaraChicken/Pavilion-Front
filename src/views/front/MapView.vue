<template lang="pug">
VCantainer
  VRow(style="height: 100%;")
    VCol(class="d-flex justify-center")
      div(style="width: 52rem; height: 52rem;")
        div.map
</template>

<style scoped lang="sass">
.map
  height: 100%
  background-image: url('@/assets/Map.jpg')
  background-size: contain
</style>