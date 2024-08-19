import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Departments from '@/pages/Departments.vue'
import DepartmentDetail from '@/pages/DepartmentDetail.vue'

const router = createRouter({
  // HTML 5 모드
  // 브라우저의 HTML5 history API를 이용
  history: createWebHistory(),
  // 라우트 경로마다 보여줄 컴포넌트를 배열로 지정한다.
  routes: [
    {path: '/', component: Home},
    {path: '/departments', component: Departments},
    // 동적 라우트
    {path: '/departments/:no', component: DepartmentDetail}
  ]
})

export default router
