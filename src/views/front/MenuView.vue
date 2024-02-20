<template lang="pug">
VCantainer
  VRow.justify-center.px-15
    VCol.text-center.my-5(cols="12")
      H1 英雄食典
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
</style>
