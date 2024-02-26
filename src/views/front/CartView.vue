<template lang="pug">
VCantainer
  VRow(style="height: 100%;")
    VCol(cols="12" class="d-flex justify-center align-center")
      Div.pa-5.overflow( style="width: 75rem; height: 43.75rem; border-radius: 20px; background-color: #CAAD5F;" )
        H1(class="text-center mb-10" style="color: #261E47;") 購物車
        VDataTable(:items="cart" :headers="headers")
          template(#[`item.product.name`]="{ item }")
            span(v-if="item.product.sell") {{ item.product.name }}
            span.text-red.text-decoration-line-through(v-else) {{ item.product.name }} (已下架)
          template(#[`item.quantity`]="{ item }")
            VBtn(variant="text" icon="mdi-minus" color="red" @click="addCart(item.product._id, -1)")
            | {{ item.quantity }}
            VBtn(variant="text" icon="mdi-plus" color="green" @click="addCart(item.product._id, 1)")
          template(#[`item.action`]="{ item }")
            VBtn(variant="text" icon="mdi-delete" color="red" @click="addCart(item.product._id, item.quantity * -1)")
        Div.text-center.mt-15
          P 總金額: {{ total }}
          VBtn(color="primary" :disabled="!canCheckout" :loading="isSubmitting" @click="checkout") 結帳
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useApi } from '@/composables/axios'
import { useUserStore } from '@/store/user'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

const { apiAuth } = useApi()
const user = useUserStore()
const router = useRouter()

const cart = ref([])
const headers = [
  { title: '商品名稱', key: 'product.name' },
  { title: '單價', key: 'product.price' },
  { title: '數量', key: 'quantity' },
  { title: '總價', key: 'total', value: item => item.product.price * item.quantity },
  { title: '操作', key: 'action' }
]

const total = computed(() => {
  return cart.value.reduce((total, current) => {
    return total + current.quantity * current.product.price
  }, 0)
})

const canCheckout = computed(() => {
  return cart.value.length > 0 && !cart.value.some(item => !item.product.sell)
})

const addCart = async (product, quantity) => {
  if (!user.isLogin) {
    router.push('/login')
    return
  }
  try {
    const { data } = await apiAuth.patch('/users/cart', {
      product,
      quantity
    })
    user.cart = data.result
    Swal.fire({
      icon: 'success',
      title: '修改成功',
      timer: 2500
    })
    const idx = cart.value.findIndex(item => item.product._id === product)
    cart.value[idx].quantity += quantity
    if (cart.value[idx].quantity <= 0) {
      cart.value.splice(idx, 1)
    }
  } catch (error) {
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    Swal.fire({
      icon: 'error',
      title: text,
      confirmButtonText: '確定'
    })
  }
}

const isSubmitting = ref(false)
const checkout = async () => {
  isSubmitting.value = true
  try {
    await apiAuth.post('/orders')
    user.cart = 0
    router.push('/orders')
    Swal.fire({
      icon: 'success',
      title: '結帳成功',
      timer: 2500
    })
  } catch (error) {
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    Swal.fire({
      icon: 'error',
      title: text,
      confirmButtonText: '確定'
    })
  }
  isSubmitting.value = false
}

onMounted(async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    cart.value.push(...data.result)
  } catch (error) {
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    Swal.fire({
      icon: 'error',
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
</style>