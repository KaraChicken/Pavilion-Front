<template lang="pug">
VCantainer
  VRow(style="height: 100%;")
    VCol.d-flex.justify-center.align-center(cols="12")
      Div.pa-5.overflow(style="width: 75rem; height: 43.75rem; border-radius: 20px; background-color: #CAAD5F;" )
        H1.text-center.mb-10(style="color: #261E47;") {{ product.name }}
        Div.content
          VImg(:src="product.image")
          P 單價： {{ product.price }}
          P(style="width-space: pre;") 商品說明：{{ product.description }}
          VForm(:disabled="isSubmitting" @submit.prevent="submit")
            VTextField(type="number" min="0" v-model.number="quantity.value.value" :error-messages="quantity.errorMessage.value")
            VBtn(type="submit" prepend-icon="mdi-cart" :loading="isSubmitting") 加入購物車
VOverlay.align-center.justify-center.text-center(:model-value="!product.sell")
  H1.text-red.text-h1 已下架
  VBtn(to="/" color="green") 回首頁
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useApi } from '@/composables/axios'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useUserStore } from '@/store/user'

import Swal from 'sweetalert2'

const route = useRoute()
const router = useRouter()
const { api, apiAuth } = useApi()
const user = useUserStore()

const product = ref({
  _id: '',
  name: '',
  price: 0,
  description: '',
  image: '',
  sell: true,
  category: ''
})

const schema = yup.object({
  quantity: yup.number().typeError('缺少數量').required('缺少數量').min(1, '數量最小為 1')
})
const { isSubmitting, handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: {
    quantity: 1
  }
})
const quantity = useField('quantity', schema)

const submit = handleSubmit(async (values) => {
  if (!user.isLogin) {
    router.push('/login')
    return
  }
  try {
    const { data } = await apiAuth.patch('/users/cart', {
      product: product.value._id,
      quantity: values.quantity
    })
    user.cart = data.result
    Swal.fire({
      icon: 'success',
      title: '新增成功',
      timer: 800
    })
  } catch (error) {
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    Swal.fire({
      icon: 'error',
      title: text,
      confirmButtonText: "確定"
    })
  }
})

onMounted(async () => {
  try {
    const { data } = await api.get('/products/' + route.params.id)
    product.value._id = data.result._id
    product.value.name = data.result.name
    product.value.price = data.result.price
    product.value.description = data.result.description
    product.value.image = data.result.image
    product.value.sell = data.result.sell
    product.value.category = data.result.category

    document.title = `購物網 | ${product.value.name}`
  } catch (error) {
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    Swal.fire({
      icon: 'error',
      title: text,
      confirmButtonText: "確定"
    })
    router.push('/')
  }
})
</script>

<style scoped lang="sass">
.v-img
  width: 350px
  margin: auto
.content
  width: 350px
  position: relative
  top: 5%
  left: 50%
  transform: translateX(-50%)
  font-size: 1.5rem
</style>