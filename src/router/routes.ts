import Layout from '@/layout/index.vue'
import type { RouteRecordRaw } from 'vue-router'
import Home from '@/views/home/index.vue'
import Demo from '@/views/demo/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Root',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
        meta: {
          title: '主页1'
        }
      },
      {
        path: 'demo',
        name: 'Demo',
        component: Demo,
        meta: {
          title: '主页2'
        }
      },
      {
        path: 'tools',
        name: 'Tools',
        component: () => import('@/views/tools/index.vue'),
        meta: {
          title: '工具'
        }
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/about/index.vue'),
        meta: {
          title: '关于',
          noCache: true
        }
      },
      {
        path: 'test',
        name: 'Test',
        component: () => import('@/study/components/TestComp.vue'),
        meta: {
          title: '测试',
          noCache: true
        }
      }
    ]
  }
]

export default routes
