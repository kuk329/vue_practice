import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
// 기본 파일명이 index.js인 경우에는 디렉터리명만으로 import가 가능하다.
import router from './router'

const app = createApp(App)

// import한 router 객체를 애플리케이션 인스턴스에 등록한다.
app.use(router)

app.mount('#app')
