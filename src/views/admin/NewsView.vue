<template lang="pug">
VContainer
  VRow
    VCol(cols="12")
      h1.text-center 消息發布
    VDivider
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
        template(#[`item.image`]="{ item }")
          VImg(:src="item.image" height="50px")
        template(#[`item.poText`]="{ item }")
          VIcon(icon="mdi-check" v-if="item.poText")
        template(#[`item.edit`]="{ item }")
          VBtn(icon="mdi-pencil" variant="text" color="blue" @click="openDialog(item)")
VDialog(v-model="dialog" persistent width="500px")
  VForm(:disabled="isSubmitting" @submit.prevent="submit")
    VCard
      VCardTitle {{ dialogId === '' ? '新增消息' : '編輯消息' }}
      VCardText
        VTextField(
          label="標題"
          v-model="name.value.value"
          :error-messages="name.errorMessage.value"
        )
        VSelect(
          label="類別"
          :items="categories"
          v-model="category.value.value"
          :error-messages="category.errorMessage.value"
        )
        VCheckbox(
          label="上架"
          v-model="poText.value.value"
          :error-messages="poText.errorMessage.value"
        )
        VTextarea(
          label="內容"
          v-model="description.value.value"
          :error-messages="description.errorMessage.value"
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
    name.value.value = item.name
    price.value.value = item.price
    description.value.value = item.description
    category.value.value = item.category
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
  name: yup
    .string()
    .required('缺少標題'),
  price: yup
    .number()
    .typeError('商品價格格式錯誤')
    .required('缺少商品價格')
    .min(0, '商品價格不能小於 0'),
  description: yup
    .string()
    .required('缺少內容'),
  category: yup
    .string()
    .required('缺少分類')
    .test('isCategory', '商品分類錯誤', value => categories.includes(value)),
  poText: yup
    .boolean()
})
const { handleSubmit, isSubmitting, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    price: 0,
    description: '',
    category: '',
    poText: false
  }
})

const name = useField('name')
const price = useField('price')
const description = useField('description')
const category = useField('category')
const poText = useField('poText')

const fileRecords = ref([])
const rawFileRecords = ref([])

const submit = handleSubmit(async (values) => {
  if (fileRecords.value[0]?.error) return
  if (dialogId.value === '' && fileRecords.value.length === 0) return
  try {
    // 建立 FormData 物件
    // 使用 fd.append(欄位, 值) 將資料放進去
    const fd = new FormData()
    for (const key in values) {
      fd.append(key, values[key])
    }

    if (fileRecords.value.length > 0) {
      fd.append('image', fileRecords.value[0].file)
    }

    if (dialogId.value === '') {
      await apiAuth.post('/news', fd)
    } else {
      await apiAuth.patch('/news/' + dialogId.value, fd)
    }
    const text = dialogId.value === '' ? '新增成功' : '編輯成功'
    Swal.fire({
      position: "center",
      icon: "success",
      title: text,
      showConfirmButton: false,
      // timer: 1500
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
  { title: '類別', align: 'center', sortable: true, key: 'description' },
  { title: '標題', align: 'center', sortable: false, key: 'image' },
  { title: '內容', align: 'center', sortable: true, key: 'name' },
  { title: '上架狀態', align: 'center', sortable: true, key: 'price' },
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
