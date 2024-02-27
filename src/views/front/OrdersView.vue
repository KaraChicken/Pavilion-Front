<template lang="pug">
VCantainer
  VRow(style="height: 100%;")
    VCol(cols="12" class="d-flex justify-center align-center")
      Div.pa-5.overflow( style="width: 75rem; height: 43.75rem; border-radius: 20px; background-color: #CAAD5F;" )
        H1(class="text-center mb-10" style="color: #261E47;") 訂單
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
    const { data } = await apiAuth.get('/orders')
    orders.value.push(...data.result)
  } catch (error) {
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    Swal.fire({
      icon: error,
      title: text,
      confirmButtonText: '確定'
    })
  }
})

</script>

<style scoped lang="sass">
.overflow
  overflow: scroll
.overflow::-webkit-scrollbar 
  display: none
.v-table
  background: #655131
  color: #CAAD5F
  font-size: 1.5rem
</style>