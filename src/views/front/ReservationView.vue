<!-- <template lang="pug">
VContainer(style="height:100%;" class="d-flex justify-center align-center")
  Div(class="pa-5 bg-tertiary custom-scrollbar" style="width: 75rem; height: 43.75rem; border-radius: 20px; text-align: center;")
    H1(class="text-center mb-10" style="color: #261E47;") 線上訂位
    VRow(class="justify-center")
      VCol(cols="12" md="6")
        VTextField(v-model="firstname" :rules="FirstNameRules" :counter="10" label="姓名" :required="true")
      VCol(cols="12" md="6")
        VTextField(v-model="phone" :rules="PhoneRules" :counter="10" label="電話" :required="true")
      VCol(cols="12" md="6")
        VTextField(v-model="email" :rules="emailRules" label="E-mail" :required="true")
      VCol(cols="12" md="6")
        VSelect(v-model="select" :items="items" :rules="[value => !!value || '欄位不得為空']" label="訂位" required)
      VCol(cols="12")
        VTextField(v-model="text" :rules="emailRules" label="備註最多20字" :required="true" :counter="20")
      VCol(cols="12")
        Div(class="d-flex flex-column")
          VBtn(color="primary" class="mt-4" block @click="validate" style="height: 5rem; border-radius: 0.75rem; font-size: 2.5rem; font-weight: border;") 完成訂位
</template>

<script setup>
  import { ref } from 'vue'
  
  const valid = ref(false)
  const firstname = ref('')
  const lastname = ref('')
  const phone = ref('')
  const email = ref('')
  
  const FirstNameRules = [
    (value) => {
      if (value) return true
      return '欄位不得為空'
    }
  ]
  
  const LastNameRules = [
    (value) => {
      if (value) return true
      return '欄位不得為空'
    }
  ]
  
  const PhoneRules = [
    (value) => {
      if (value) return true
      return '欄位不得為空'
    }
  ]
  
  const emailRules = [
    (value) => {
      if (value) return true
      return '欄位不得為空'
    },
    (value) => {
      if (/.+@.+\..+/.test(value)) return true
      return 'E-mail必須是有效的。'
    }
  ]
  const name = ref()
  const nameRules = [
    v => !!v || 'Name is required',
    v => (v && v.length <= 10) || 'Name must be less than 10 characters',
  ]
  const select = ref(null)
  const items = [
    '包廂1',
    '包廂2',
    '包廂3',
    '包廂4'
  ]
  const checkbox = ref(false)
  const validate = async () => {
    const { valid } = await this.form.validate()
    if (valid) alert('Form is valid')
  }
  // const reset = {
  //   this: form.reset()
  // }
  // const resetValidation = {
  //   this: form.resetValidation()
  // }
</script> -->
<template lang="pug">
VContainer
  VRow
    VCol(cols="12")
      h1 訂單
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
      position: "center",
      icon: "error",
      title: text,
      showConfirmButton: false,
      timer: 2000
    });
  }
})
</script>
