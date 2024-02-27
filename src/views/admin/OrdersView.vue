<template lang="pug">
VContainer
  VRow
    VCol(cols="12")
      h1.text-center 訂單管理
    VCol(cols="12")
      VDataTable(:items="orders" :headers="headers")
        template(#[`item.createdAt`]="{ item }")
          | {{ new Date(item.createdAt).toLocaleString() }}
        template(#[`item.cart`]="{ item }")
          ul
            li(v-for="cart in item.cart" :key="cart._id")
              | {{ cart.product.name }} * {{ cart.quantity }} 
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useApi } from '@/composables/axios'
import Swal from 'sweetalert2'

const { apiAuth } = useApi()

const orders = ref([])
const headers = [
  { title: '訂單編號', key: '_id' },
  { title: '帳號', key: 'user.account' },
  { title: '日期', key: 'createdAt' },
  { title: '商品', key: 'cart', sortable: false },
  {
    title: '金額',
    key: 'price',
    value: (item) => {
      return item.cart.reduce((total, current) => {
        return total + current.quantity * current.product.price
      }, 0)
    }
  }
]

onMounted(async () => {
  try {
    const { data } = await apiAuth.get('/orders/all')
    orders.value.push(...data.result)
  } catch (error) {
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    Swal.fire({
      icon: "error",
      title: "喔喔！！",
      text: text,
      confirmButtonText: "確定"
    })
  }
})
</script>

<style scoped lang="sass">
.v-table
  background-color: #CAAD5F
  font-size: 1.5rem
  padding: 1rem
  border-radius: 0.5rem

button
  font-size: 1.5rem
</style>