<template lang="pug">
VTable
  Thead
    Tr
      Th(class="text-left") 姓名
      Th(class="text-left") 訂位
      Th(class="text-left") 備註
  Tbody
    Tr(
      v-for="items in desserts"
      :key="item.name"
    )
      Td {{ item.name }}
      Td {{ item.calories }}
</template>

<script setup>
  const desserts = () => {
    [
      {
        name: 'Frozen Yogurt',
        calories: 159,
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
      },
      {
        name: 'Eclair',
        calories: 262,
      }
    ]
  }
</script>
