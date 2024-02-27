<template lang="pug">
VCantainer
  VRow(style="height: 100%;")
    VCol(cols="12" class="d-flex justify-center align-center")
      Div.pa-5.overflow( style="width: 75rem; height: 43.75rem; border-radius: 20px; background-color: #CAAD5F;" )
        Div.text-center
          H1.mb-10(style="color: #261E47;") 英雄食典
          VRow
            VCol(cols="12" md="6" lg="3" v-for="product in products" :key="product._id")
              ProductCard(v-bind="product")
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useApi } from '@/composables/axios.js'
import Swal from 'sweetalert2'
import ProductCard from '@/components/ProductCard.vue'
import gsap from 'gsap'

const { api } = useApi()

const products = ref([])

onMounted(async() => {
  try {
    const { data } = await api.get('/products', {
      params: {
        itemsPerPage: -1
      }
    })
    products.value.push(...data.result.data)
    await nextTick()
    gsap
      .to('.product-card', { opacity: 1, duration: 0.5 })
  } catch (error) {
    console.log(error)
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    Swal.fire({
      icon: 'error',
      title: text,
      confirmButtonText: "確定"
    })
  }
})
</script>

<style scoped lang="sass">
.product-card
  opacity: 0

.overflow
  overflow: scroll
.overflow::-webkit-scrollbar 
  display: none

</style>
