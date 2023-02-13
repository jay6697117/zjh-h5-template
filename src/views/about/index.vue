<!--
一个可以递归渲染自己的嵌套树组件。
你可以双击一个项目将其转变为一个文件夹。
-->

<script setup name="About">
import { ref } from 'vue'
import MyTree from '@/study/components/MyTree.vue'

const treeData = ref({
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'world' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [{ name: 'hello' }, { name: 'world' }]
        },
        { name: 'hello' },
        { name: 'world' },
        {
          name: 'child folder',
          children: [{ name: 'hello' }, { name: 'world' }]
        }
      ]
    }
  ]
})
</script>

<template>
  <ul class="about">
    <MyTree class="item" :model="treeData"></MyTree>
  </ul>
</template>

<style lang="less" scoped>

.about{
  padding: 8px;

  .item {
  cursor: pointer;
  line-height: 1.5;
}
}

</style>
