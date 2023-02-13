import { http } from '@/utils/http'

type ListResult = {
  code: number | boolean
  message: string
  list: Array<any>
}

type ListResult1 = {
  succeed: number | boolean
  returnMsg: string
  datas: Array<any>
}

// export function getListApi(params?: object): Promise<ListResult> {
//   return http.request({
//     url: '/list/get',
//     method: 'get',
//     params
//   })
// }

export function getListApiError(data?: object): Promise<ListResult> {
  return http.request({
    url: '/list/error',
    method: 'post',
    data
  })
}

export function getListApi(data?: object): Promise<ListResult1> {
  return http.request({
    url: '/api/LD2005?activityId=2e502295b31ad4fbf9d195064480a872',
    method: 'post',
    data
  })
}

export function getListApi1(data?: object): Promise<ListResult1> {
  return http.request({
    url: '/api/LD1001?activityId=2e502295b31ad4fbf9d195064480a872',
    method: 'post',
    data
  })
}
