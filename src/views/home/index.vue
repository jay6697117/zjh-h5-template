<script setup lang="ts" name="Home">
import { ref } from 'vue'
import GridComp from '@/study/components/GridComp.vue'

const searchQuery = ref('')
const gridData = [
  { name: 'Chuck Norris', power: Infinity },
  { name: 'Bruce Lee', power: 9000 },
  { name: 'Jackie Chan', power: 7000 },
  { name: 'Jet Li', power: 8000 }
]
const gridColumns = ['name', 'power']
</script>

<template>
  <div class="home">
    <form id="search" class="search">Search <input v-model="searchQuery" name="query" /></form>
    <grid-comp :data="gridData" :columns="gridColumns" :filter-key="searchQuery" />
  </div>
</template>

<style lang="less" scoped>
.home {
  padding: 10px;

  .search {
    margin-bottom: 10px;
  }
}
</style>
