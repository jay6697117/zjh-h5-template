<script setup>
// 树状视图暂时跳过
// https://cn.vuejs.org/examples/#tree
import { ref, computed } from 'vue'

const props = defineProps({
  model: Object
})

const isOpen = ref(false)
const isFolder = computed(() => {
  return props.model.children && props.model.children.length
})

function toggle() {
  isOpen.value = !isOpen.value
}

function changeType() {
  if (!isFolder.value) {
    // eslint-disable-next-line
    props.model.children = []
    addChild()
    isOpen.value = true
  }
}

function addChild() {
  // eslint-disable-next-line
  props.model.children.push({ name: 'new stuff' })
}
</script>

<template>
  <li>
    <div :class="{ bold: isFolder }" @click="toggle" @dblclick="changeType">
      {{ model.name }}
      <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <!--
        一个可以通过其“name”选项递归渲染自己的组件，
        (如果使用单文件组件，则从文件名推断)
      -->
      <MyTree class="item" v-for="(modelItem, index) in model.children" :key="index" :model="modelItem" />
      <li class="add" @click="addChild">+</li>
    </ul>
  </li>
</template>

<style lang="less" scoped>
.bold {
  font-weight: bold;
}

ul {
  padding: 8px;
  border: 1px solid #ccc;
  background-color: #fff;
  li {
    background-color: #eee;
    margin-bottom: 5px;
    padding-left: 5px;
  }
}
</style>
