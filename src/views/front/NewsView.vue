<template lang="pug">
VCantainer
  VRow(style="height: 100%;")
    VCol(cols="12" class="d-flex justify-center align-center")
      //- background-color: #CAAD5F;
      Div(class="pa-5" style="width: 1200px; height: 700px; border-radius: 20px; background-color: #CAAD5F;" )
        H1(class="text-center mb-10" style="color: #261E47;") 武林告示
        //- 這邊可能要串接後端接收資料
        Div(class="ml-5" style="background-color= ;")
          VDataTable(:items="items")
</template>

<script setup>
  const items = [
    {
      '標題': 'African Elephant',
      '內容': 'Loxodonta africana',
      '告示人': 'Herbivore',
      '更新日期': 'Savanna, Forests',
    },
    {
      '標題': 'African Elephant',
      '內容': 'Loxodonta africana',
      '告示人': 'Herbivore',
      '更新日期': 'Savanna, Forests',
    },
    // ... more items
  ]
</script>
