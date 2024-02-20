<template lang="pug">
VCantainer
  VRow(style="height: 100%;")
    VCol(cols="12" class="d-flex justify-center align-center")
      //- background-color: #CAAD5F;
      Div(class="pa-5" style="width: 75rem; height: 43.75rem; border-radius: 20px; background-color: #CAAD5F;" )
        H1(class="text-center mb-10" style="color: #261E47;") 同道相邀
        Div(class="d-flex justify-center align-center")
          VCard(class="px-6 py-8" max-width="344")
            H5.mb-5 已有帳號嗎?
              VBtn.mx-5(to="/login") 立即登入
            VSheet(max-width="300" class="mx-auto")
              VForm(:disabled="isSubmitting" @submit.prevent="submit")
                VTextField(
                  label="帳號"
                  minlength="4" maxlength="20" counter
                  v-model="account.value.value"
                  :error-messages="account.errorMessage.value"
                )
                VTextField(
                  label="信箱" type="email"
                  v-model="email.value.value"
                  :error-messages="email.errorMessage.value"
                )
                VTextField(
                  label="密碼" type="password"
                  minlength="4" maxlength="20" counter
                  v-model="password.value.value"
                  :error-messages="password.errorMessage.value"
                )
                VTextField(
                  label="確認密碼" type="password"
                  minlength="4" maxlength="20" counter
                  v-model="passwordConfirm.value.value"
                  :error-messages="passwordConfirm.errorMessage.value"
                )
                VBtn(type="submit" color="green") 註冊
</template>

<script setup>
import validator from 'validator'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useRouter } from 'vue-router'
import { useApi } from '@/composables/axios'
import Swal from 'sweetalert2'

const { api } = useApi()

const router = useRouter()

// 定義註冊表單的資料格式
const schema = yup.object({
  account: yup
    .string()
    .required('帳號為必填欄位')
    .min(4, '使用者帳號長度不符')
    .max(20, '使用者帳號長度不符'),
  email: yup
    .string()
    .required('信箱為必填欄位')
    // .test(自訂驗證名稱, 錯誤訊息, 驗證function)
    .test(
      'isEmail', '信箱格式錯誤',
      (value) => {
        return validator.isEmail(value)
      }
    ),
  password: yup
    .string()
    .required('密碼為必填欄位')
    .min(4, '密碼長度不符')
    .max(20, '密碼長度不符'),
  passwordConfirm: yup
    .string()
    .required('密碼為必填欄位')
    .min(4, '密碼長度不符')
    .max(20, '密碼長度不符')
    // .oneOf 只允許符合陣列內其中一個值
    // .oneOf(陣列, 錯誤訊息)
    // .ref('password') 代表這個 schema 的 password 欄位值
    .oneOf([yup.ref('password')], '密碼不一致')
})

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema
})

const account = useField('account')
const email = useField('email')
const password = useField('password')
const passwordConfirm = useField('passwordConfirm')

const submit = handleSubmit(async (values) => {
  try {
    await api.post('/users', {
      account: values.account,
      email: values.email,
      password: values.password
    })
    Swal.fire({
      position: "center",
      icon: "success",
      title: "註冊成功",
      showConfirmButton: false,
      timer: 2000
    });
    router.push('/login')
  } catch (error) {
    console.log(error)
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    Swal.fire({
      position: "center",
      icon: "error",
      title: text,
      confirmButtonText: "確定",
      timer: 2000
    });
  }
})
</script>
