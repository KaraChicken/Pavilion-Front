<template lang="pug">
VContainer
  VRow
    VCol(cols="12")
      h1.text-center 消息發布
    VCol(cols="12")
      VBtn(color="green" @click="openDialog()") 新增消息
    VCol(cols="12")
      VDataTableServer(
        v-model:items-per-page="tableItemsPerPage"
        v-model:sort-by="tableSortBy"
        v-model:page="tablePage"
        :items="tableProducts"
        :headers="tableHeaders"
        :loading="tableLoading"
        :items-length="tableItemsLength"
        :search="tableSearch"
        @update:items-per-page="tableLoadItems"
        @update:sort-by="tableLoadItems"
        @update:page="tableLoadItems"
        hover
      )
        template(#top)
          VTextField(
            label="搜尋"
            append-icon="mdi-magnify"
            v-model="tableSearch"
            @click:append="tableApplySearch"
            @keydown.enter="tableApplySearch"
          )
        template(#[`item.group`]="{ item }")
          | {{ item.group }}
        template(#[`item.poText`]="{ item }")
          VIcon(icon="mdi-check" v-if="item.poText")
        template(#[`item.edit`]="{ item }")
          VBtn(icon="mdi-pencil" variant="text" color="#A0674B" @click="openDialog(item)")
VDialog(v-model="dialog" persistent width="500px")
  VForm(:disabled="isSubmitting" @submit.prevent="submit")
    VCard
      VCardTitle {{ dialogId === '' ? '新增消息' : '編輯消息' }}
      VCardText
        VTextField(
          label="標題"
          v-model="title.value.value"
          :error-messages="title.errorMessage.value"
        )
        VSelect(
          label="類別"
          :items="categories"
          v-model="group.value.value"
          :error-messages="group.errorMessage.value"
        )
        VCheckbox(
          label="上架"
          v-model="poText.value.value"
          :error-messages="poText.errorMessage.value"
        )
        VTextarea(
          label="內容"
          v-model="content.value.value"
          :error-messages="content.errorMessage.value"
        )
      VCardActions
        VSpacer
        VBtn(color="red" :disabled="isSubmitting" @click="closeDialog") 取消
        VBtn(color="green" type="submit" :loading="isSubmitting") 送出
</template>

<script setup>
import { ref } from 'vue'
import * as yup from 'yup'
import { useForm, useField } from 'vee-validate'
import { useApi } from '@/composables/axios'
import Swal from 'sweetalert2'

const { apiAuth } = useApi()
// const createSnackbar = useSnackbar()

const fileAgent = ref(null)

// 表單對話框的開啟狀態
const dialog = ref(false)
// 表單對話框正在編輯的商品 ID，空的話代表是新增商品
const dialogId = ref('')
// 打開編輯對話框
const openDialog = (item) => {
  if (item) {
    dialogId.value = item._id
    title.value.value = item.title
    group.value.value = item.group
    content.value.value = item.content
    poText.value.value = item.poText
  } else {
    dialogId.value = ''
  }
  dialog.value = true
}
// 關閉對話框
const closeDialog = () => {
  dialog.value = false
  resetForm()
}

// 分類
const categories = ['公休', '活動', '其他']
// 表單驗證
const schema = yup.object({
  title: yup
    .string()
    .required('請輸入標題')
    .min(2, '標題太短')
    .max(50, '標題太長'),
  group: yup
    .string()
    .required('請選擇類別')
    .oneOf(['公休', '活動', '其他'], '類別選擇錯誤'),
  content: yup
    .string()
    .required('請輸入內容')
    .min(10, '內容太短')
    .max(100, '內容太長'),
  poText: yup
    .boolean()
    .required('請選擇貼文上架狀態')
})
const { handleSubmit, isSubmitting, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    group: '',
    title: '',
    content: '',
    poText: false,
    _id: ''
  }
})

const title = useField('title') 
const content = useField('content') 
const group = useField('group') 
const poText = useField('poText') 

const submit = handleSubmit(async (values) => {
  // console.log(values)
  try {
    if (dialogId.value === '') {
      await apiAuth.post('/news', {
        group: values.group,
        title: values.title,
        content: values.content,
        poText: values.poText
      })
    } else {
      await apiAuth.patch('/news/' + dialogId.value, {
        group: values.group,
        title: values.title,
        content: values.content,
        poText: values.poText
      })
    }
    const text = dialogId.value === '' ? '新增成功' : '編輯成功'
    Swal.fire({
      position: "center",
      icon: "success",
      title: text,
      showConfirmButton: false,
      timer: 1500
    })
    closeDialog()
    tableApplySearch()
  } catch (error) {
    console.log(error)
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    Swal.fire({
      position: "center",
      icon: "error",
      title: text,
      showConfirmButton: false,
      // timer: 1500
    })
  }
})

// 表格每頁幾個
const tableItemsPerPage = ref(10)
// 表格排序
const tableSortBy = ref([
  { key: 'createdAt', order: 'desc' }
])
// 表格頁碼
const tablePage = ref(1)
// 表格商品資料陣列
const tableProducts = ref([])
// 表格欄位設定
const tableHeaders = [
  { title: '類別', align: 'center', sortable: true, key: 'group' },
  { title: '標題', align: 'center', sortable: false, key: 'title' },
  { title: '內容', align: 'center', sortable: true, key: 'content' },
  { title: '上架狀態', align: 'center', sortable: true, key: 'poText' },
  { title: '編輯', align: 'center', sortable: false, key: 'edit' }
]
// 表格載入狀態
const tableLoading = ref(true)
// 表格全部資料數
const tableItemsLength = ref(0)
// 表格搜尋文字
const tableSearch = ref('')
// 表格載入資料
const tableLoadItems = async () => {
  tableLoading.value = true
  try {
    const { data } = await apiAuth.get('/news/all', {
      params: {
        page: tablePage.value,
        itemsPerPage: tableItemsPerPage.value,
        sortBy: tableSortBy.value[0]?.key || 'createdAt',
        sortOrder: tableSortBy.value[0]?.order === 'asc' ? 1 : -1,
        search: tableSearch.value
      }
    })
    tableProducts.value.splice(0, tableProducts.value.length, ...data.result.data)
    tableItemsLength.value = data.result.total
  } catch (error) {
    console.log(error)
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    Swal.fire({
      position: "center",
      icon: "error",
      title: text,
      showConfirmButton: true,
      // timer: 1500
    })
  }
  tableLoading.value = false
}
tableLoadItems()
// 表格套用搜尋
const tableApplySearch = () => {
  tablePage.value = 1
  tableLoadItems()
}
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