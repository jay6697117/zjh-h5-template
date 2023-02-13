import { http } from '@/utils/http'

type ListResult = {
  code: number
  message: string
  list: Array<any>
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

export function getListApi(data?: object): Promise<ListResult> {
  return http.request({
    url: '/api/LD2005?activityId=2e502295b31ad4fbf9d195064480a872&sign=9d188b548d262f52e1ca403c02efca94',
    method: 'post',
    data
  })
}

// export function getListApi(data?: object): Promise<ListResult> {
//   return http.request({
//     url: '/api/LD1001?activityId=2e502295b31ad4fbf9d195064480a872&sign=ddd7208700d78e673dbeff991b565367',
//     method: 'post',
//     data
//   })
// }
