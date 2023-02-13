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
            'id|+1': 1
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
