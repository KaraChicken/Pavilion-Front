<template lang="pug">
VCard.product-card
  VImg(:src="image" cover height="200")
  VCardTitle
    RouterLink.text-primary.text-decoration-none(:to="'/products/' + _id") {{ name }}
  VCardSubtitle ${{ price }}
  VCardText(style="white-space: pre;") {{ description }}
  VCardActions
    VBtn(color="primary" prepend-icon="mdi-cart" @click="addCart") 加入購物車
</template>

<script setup>
import { useApi } from '@/composables/axios'
import { useUserStore } from '@/store/user'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'

const { apiAuth } = useApi()
const user = useUserStore()
const router = useRouter()

const props = defineProps(['_id', 'category', 'description', 'image', 'name', 'price', 'sell'])

const addCart = async () => {
  if (!user.isLogin) {
    router.push('/login')
    return
  }
  try {
    const { data } = await apiAuth.patch('/users/cart', {
      product: props._id,
      quantity: 1
    })
    user.cart = data.result
    Swal.fire({
      icon: "success",
      title: "新增成功",
      text: "商品已加入購物車",
      timer: 800
    })
  } catch (error) {
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    Swal.fire({
      icon: "error",
      title: "喔喔！！",
      text: text,
      confirmButtonText: "確定"
    })
  }
}
</script>