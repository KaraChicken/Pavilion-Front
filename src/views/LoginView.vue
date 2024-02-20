<template lang="pug">
VCantainer
  VRow(style="height: 100%;")
    VCol(cols="12" class="d-flex justify-center align-center")
      //- background-color: #CAAD5F;
      Div(class="pa-5" style="width: 75rem; height: 43.75rem; border-radius: 20px; background-color: #CAAD5F;" )
        H1(class="text-center mb-10" style="color: #261E47;") 同道相邀
        Div(class="d-flex justify-center align-center")
          VCard(class="px-6 py-8" max-width="344")
            H5.mb-5 沒有帳號嗎?
              VBtn.mx-5(to="/register") 立即註冊
            VSheet(max-width="300" class="mx-auto")
              VForm(validate-on="submit lazy" @submit.prevent="submit")
                VTextField(v-model="account.value.value" :rules="rules" label="帳號")
                VTextField(v-model="password.value.value" :rules="rules" label="密碼")
                VBtn(:loading="loading" type="submit" block class="mt-2" text="登入")
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
    const { data } = await api.post('/users/login', {
      account: values.account,
      password: values.password
    })
    // 儲存 token 到 StorageStorage
    sessionStorage.setItem('帳號：' + data.result.account, data.result.token)
    user.login(data.result)
    console.log(data.result)
    Swal.fire({
      position: "center",
      icon: "success",
      title: "登入成功",
      showConfirmButton: false,
      timer: 1500
    });
    router.push('/')
  } catch (error) {
    console.log(error)
    Swal.fire({
      position: "center",
      icon: "error",
      title: "登出失敗",
      confirmButtonText: "確定"
    });
  }
})
</script>
