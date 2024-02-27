<template lang="pug">
VCantainer
  VRow(style="height: 100%;")
    VCol(cols="12" class="d-flex justify-center align-center")
      Div.pa-5(style="width: 75rem; height: 43.75rem; border-radius: 20px; background-color: #CAAD5F;" )
        H1.text-center.mb-10(style="color: #261E47; ") 同道相邀
        Div.d-flex.justify-center(style="height: calc(100% - (88px * 2));")
          VCard.px-6.py-8(max-width="344" color="text01")
            H3.mb-5 沒有帳號嗎?
              VBtn.mx-5(to="/register" style="background-color: #CAAD5F; font-weight: bold;") 立即註冊
            VSheet.bgLogin(max-width="300" class="mx-auto" color="text01" style="height: calc(100% - 56px * 2);")
              VForm(validate-on="submit lazy" @submit.prevent="submit")
                VTextField(v-model="account.value.value" :rules="rules" label="帳號")
                VTextField(v-model="password.value.value" :rules="rules" label="密碼")
                VBtn.login(:loading="loading" type="submit" block text="登入" style="background-color: #CAAD5F; font-weight: bold;")
</template>

<script setup>
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { useApi } from '@/composables/axios'
import { useUserStore } from '@/store/user'

const { api } = useApi()

const router = useRouter()

const user = useUserStore()

// 定義註冊表單的資料格式
const schema = yup.object({
  account: yup
    .string()
    .required('帳號為必填欄位')
    .min(4, '使用者帳號長度不符')
    .max(20, '使用者帳號長度不符'),
  password: yup
    .string()
    .required('密碼為必填欄位')
    .min(4, '密碼長度不符')
    .max(20, '密碼長度不符')
})

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema
})

const account = useField('account')
const password = useField('password')

const submit = handleSubmit(async (values) => {
  try {
    await Swal.fire({
      position: "center",
      icon: "success",
      title: "登入成功",
      showConfirmButton: false,
      timer: 1500
    })
    const { data } = await api.post('/users/login', {
      account: values.account,
      password: values.password
    })
    user.login(data.result)
    // console.log(data.result) 測試用，註解拿掉會洩漏帳號資料

    router.push('/')
  } catch (error) {
    console.log(error)
    Swal.fire({
      position: "center",
      icon: "error",
      title: "登入失敗",
      confirmButtonText: "確定"
    });
  }
})
</script>

<style scoped lang="sass">

.login
  margin-left: auto
  margin-right: auto
.bgLogin
  width: 240px
  height: 484px
</style>
