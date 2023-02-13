import { defineMock } from 'vite-plugin-mock-dev-server'
import Mock from 'mockjs'

export default defineMock([
  {
    url: '/mock-api/list/get',
    delay: 1000,
    body: {
      code: 0,
      message: 'OK',
      result: Mock.mock({
        'list|10': [
          {
            'id|+1': 1,
            productImg:'https://image-ebs-tmp.yestae.com//goods/20191217/c5fee48c2a8eaf884a25d7336ffc4685.jpg'
          }
        ]
      })
    }
  },
  {
    url: '/mock-api/list/error',
    delay: 1000,
    body: {
      code: 1,
      message: 'ERROR',
      result: null
    }
  }
])
