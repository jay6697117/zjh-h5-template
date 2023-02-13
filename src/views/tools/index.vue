<script setup lang="ts" name="Tools">
// eslint-disable-next-line
import { getListLD2005, getListApi, getListApiError } from '@/api/mock'
import { reactive } from 'vue'
import { showFailToast, showSuccessToast } from 'vant'
import 'vant/es/toast/style'

// eslint-disable-next-line
interface ShowList {
  [x: string]: any
}

// const showList: ShowList[] = reactive([])
const showList: any[] = reactive([])

const handleSuccessReq = async () => {
  try {
    const res = await getListApi()
    console.log('handleSuccessReq res:', res)
    const { result: {list} } = res
    console.log('handleSuccessReq list', list)
    showSuccessToast('请求成功')
    showList.push(...list);

    // const res = await getListLD2005()
    // console.log('handleSuccessReq res:', res)
    // const { datas: list } = res
    // console.log('handleSuccessReq list', list)
    // showSuccessToast('请求成功')
    // showList.push(...list)
  } catch (error) {
    console.log('handleSuccessReq error', error)
  }
}
const handleErrorReq = () => {
  getListApiError().then(
    () => {},
    err => {
      console.log(err)
      showFailToast('请求有误')
    }
  )
}
</script>

<template>
  <div class="tools-content">
    <div class="tools-content__title">
      <h3>Mock</h3>
    </div>
    <van-space>
      <van-button type="success" @click="handleSuccessReq"> 成功请求 </van-button>
      <van-button type="danger" @click="handleErrorReq"> 失败请求 </van-button>
    </van-space>
    <div class="tools-content__desc">
      <div v-for="item in showList" :key="item.goodsId" class="tools-content__desc__goods">
        <!-- <span>{{ item.goodsName }}</span> -->
        <span>{{ item.id }}</span>
        <img :src="item.productImg" width="100" alt="productImg" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.tools-content {
  padding: 20px 12px 0;

  &__title {
    border-left: 3px solid #41b883;
    padding-left: 12px;

    h3 {
      margin: 12px 0;
      font-size: 18px;
    }
  }

  &__desc {
    font-size: 14px;
    padding: 2px 10px;
    border-radius: 4px;
    background-color: #eee;
    margin-top: 14px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-content: flex-start;

    &__goods {
      margin-bottom: 20px;
      width: 50%;
      height: 150px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      img {
        width: 80%;
        height: 100%;
      }
    }
  }
}
</style>
