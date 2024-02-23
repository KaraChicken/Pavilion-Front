<template lang="pug">
VCantainer
  VRow(style="height: 100%;")
    VCol(cols="12" class="d-flex justify-center align-center")
      Div(class="pa-5" style="width: 75rem; height: 43.75rem; border-radius: 20px; background-color: #CAAD5F;" )
        H1(class="text-center mb-10" style="color: #261E47;") 武林告示
        //- 這邊可能要串接後端接收資料
        Div(class="ml-5" style="background-color= ;")
          VDataTable(:items="news" :headers="headers")
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useApi } from '@/composables/axios'
import Swal from 'sweetalert2'

const { apiAuth } = useApi()

const news = ref([])
const headers = [
  { title: '類別', key: 'group' },
  { title: '標題', key: 'title' },
  { title: '內容', key: 'content'}
]

onMounted(async () => {
    try {
      const { data } = await apiAuth.get('/news')
      console.log(...data.result)
      news.value.push(...data.result)
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
