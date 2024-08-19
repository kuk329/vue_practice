import { createRouter, createWebHistory } from 'vue-router'
// import Home from '@/pages/Home.vue'
// import Departments from '@/pages/Departments.vue'
// import DepartmentDetail from '@/pages/DepartmentDetail.vue'
// import NotFound from '@/pages/NotFound.vue';

// 지연 로딩 적용 (lazy loading)
const Home =()=> import('@/pages/Home.vue');
const Departments =()=> import('@/pages/Departments.vue');
const DepartmentDetail =()=> import('@/pages/DepartmentDetail.vue');
const NotFound =()=> import('@/pages/NotFound.vue');

const router = createRouter({
  // HTML 5 모드
  // 브라우저의 HTML5 history API를 이용
  history: createWebHistory(),
  // 라우트 경로마다 보여줄 컴포넌트를 배열로 지정한다.
  // routes: [
  //   {path: '/', component: Home},
  //   {path: '/departments', component: Departments},
  //   // 동적 라우트
  //   {path: '/departments/:no', component: DepartmentDetail}
  // ]

  // 명명된 라우터 
  // 명명된 라우터는 라우터 정보에 이름을 부여하는 방법 제공
  routes: [
    {path: '/', name:'home', component: Home},
    {path: '/departments', name:'departments', component: Departments},
    // 동적 라우트
    {path: '/departments/:no', name:'departments/no', component: DepartmentDetail},
    // 404 라우트
    {path: '/:paths(.*)*', name:'notfound', component: NotFound},
   
      // ex)  /subjects/10/dpartment
  ]
})

export default router