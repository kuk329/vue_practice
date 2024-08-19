## Vue.js 개요
### 1. Vue.js란?
* Vue.js는 Google Creative Lab에서 에반 유(Evan you)가 2013년 12월에 웹 애플리케이션의 UI를 빠르게 개발하기 위해서 만들었다.
* Vue.js는 다른 라이브러리, 프레임워크에 비해 배우기 쉽고 템플릿을 최대한 활용해서 개발할 수 있으므로 이식성과 생산성이 높다.
* Vue.js는 MVVM 패턴을 따르고 있으며 가상 DOM을 지원하므로 빠른 UI 렌더링 성능을 제공한다.
* 또한 `SPA(Single Page Application)` 아키텍처 구성을 위해 필요한 라우터(Router)기능도 효과적으로 지원한다.
### 2. 개발 환경 설정
* Node.js 홈페이지(https://nodejs.org/en/download) 접속 후 사용 중인 OS에 맞는 Installer를 다운로드한다.
* 다운로드된 Installer를 실행하여 설치한 후 명령 프롬프트를 열고 정상적으로 설치가 되었는지 확인한다.
  ```
  > node -v
  v20.10.0

  > npm -v
  10.2.3
  ```
### 3. 프로젝트 생성 및 실행
* Vue 애플리케이션을 개발하기 위해서는 개발 프로젝트 환경을 설정해야 한다.
* `Vite` 기반의 `create-vue` 도구를 사용하면 프로젝트를 생성할 때 설정들을 좀 더 편하게 진행할 수 있다.
  ``` bash
  # 아래의 명령어로 Vue 프로젝트를 생성할 수 있다.
  > npm create vue@latest
  ```
* 생성된 프로젝트를 실행하기 위해서는 명령 프롬프트에서 프로젝트 디렉터리로 이동 후 아래의 명령을 실행한다.
  ```
  > npm install
  > npm run dev
  ```
## 컴포넌트(Component)
### 1. 컴포넌트
* 컴포넌트는 재사용이 가능한 API로 수많은 기능을 내장하고 있으며, 컴포넌트 하나에서 해당 컴포넌트의 생김새와 작동 방식을 정의한다.
### 2. 단일 파일 컴포넌트
* 컴포넌트 하나를 `.vue` 파일 하나에 작성하기 때문에 붙여진 이름이다.
* 한 파일에 컴포넌트 구성을 위해 필요한 템플릿, 스크립트, 스타일 정보를 모두 포함하기 때문에 컴포넌트 단위로 관심사를 분리시킬 수 있다.
### 3. 컴포넌트(Component) 생성
* `src` 폴더 하위에 확장자가 `.vue`인 파일을 생성하고 컴포넌트를 작성한다.
* 컴포넌트는 `<template>`, `<script>`, `<style>`의 3개의 영역으로 구성된다.
  ```html
  <!-- 컴포넌트가 렌더링 할 템플릿을 작성 -->
  <template>
    <div>
      ...
    </div>
  </template>
  
  <!-- 컴포넌트 내부에서 사용할 옵션을 정의  -->
  <script>
    export default {
      ...
    }
  </script>
  
  <!-- 컴포넌트가 사용할 스타일을 작성 -->
  <style scoped>
    ...
  </style>
  ```
* `export` 구문을 사용하여 외부에서 생성한 컴포넌트를 사용할 수 있다.
* `import` 구문을 사용하여 다른 컴포넌트에서 생성한 컴포넌트를 불러올 수 있다.
  ```html
  <template>
    <div>
      <컴포넌트명 />
    </div>
  </template>
  
  <script>
    import 컴포넌트명 from '컴포넌트 경로';

    export default {
      components: {
        컴포넌트명
      },
      ...
    }
  </script>
  ```
## Vue.js 기초
### 1. 기본 디렉티브
* `v-text`는 내부적으로 innerText 속성을 변경한다.
  ```html
  <span v-text="message"></span>
  ```
* `v-html`은 내부적으로 innerHTML 속성을 변경한다.
  ```html
  <span v-html="message"></span>
  ```
* `v-bind`는 요소의 속성을 바인딩하기 위해 사용한다.
  ```html
  <img v-bind:src="imgPath"/>
  <!-- v-bind 생략 가능 -->
  <img :src="imgPath"/>
  ```
* `v-model`은 양방향 데이터 바인딩을 지원하며 사용자로부터 입력값을 받고 싶을 경우에 사용한다.
  ```html
  <label for="userName">이름 : </label>
  <input type="text" id="userName" v-model="name">
  ```
### 2. 조건 디렉티브
* 조건 디렉티브는 특정 조건에 따라 화면에 렌더링 여부를 결정해야 할 때 사용하는 디렉티브이다
* `v-show`은 요소를 렌더링 한 후 부여된 조건이 true 일 때만 해당 요소를 화면에서 보여준다.
  ```html
  <span v-show="number > 0" v-text="number"></span>
  ```
* `v-if`, `v-else`, `v-else-if`는 자바스크립트의 if-else if-else 문과 같은 조건 처리를 할 수 있다
  ```html
  <span v-if="number > 100">100보다 크다.</span>
  <span v-else-if="number > 50">100보다 작고 50보다 크다.</span>
  <span v-else>50보다 작다.</span>
  ```
### 3. 반복 디렉티브
* 반복 디렉티브는 반복되는 데이터를 화면에 렌더링하기 위해 사용하는 디렉티브이다.
* `v-for`는 자바스크립트의 for 문과 같은 반복 처리를 할 수 있다
  ```html
  <ul>
    <!-- students = ['홍길동', '임꺽정', '이몽룡', '성춘향'] -->
    <li v-for="student in students" v-text="student"></li>
  </ul>
  ```
### 4. 기타 디렉티브
* `v-pre`는 HTML 요소에 대한 컴파일을 수행하지 않는다.
  ```html
  <span v-pre>{{message}}</span>
  ```
* `v-once`는 HTML 요소를 단 한 번만 렌더링하도록 설정한다.
  ```html
  <span v-once>{{message}}</span>
  ```
## 컴포넌트 옵션(Options)
### 1. 데이터(data)
* `data` 옵션은 컴포넌트가 관리하고 추적해야 할 데이터를 등록할 때 사용한다.
  ```html
  <script>
    export default {
      // data 옵션은 객체를 리턴하는 함수로 작성한다.
      data() {
        return {
          name: '홍길동',
          age: 32
        }
      }
    };
  </script>
  ```
### 2. 계산된 속성(Computed Property)
* `computed` 옵션은 `data`나 다른 속성이 변경될 때 실행될 함수를 등록할 때 사용한다. 
* `computed` 옵션으로 등록된 함수의 리턴 값은 함수의 이름과 동일한 이름의 `계산된 속성`에 저장된다.
  ```html
  <script>
    export default {
      data() {
        return {
          number: 0
        }
      },
      computed: {
        sqrt() {
          return this.number * this.number;
        }
      }
    };
  </script>
  ```
### 3. 메소드(Method)
* `methods` 옵션은 컴포넌트에서 사용할 메소드를 등록할 때 사용한다.
  ```html
  <script>
    export default {
      methods: {
        btnClick() {
          alert('버튼을 클릭하였습니다.');
        }
      }
    };
  </script>
  ```
### 4. 생명주기 메소드
* Vue 컴포넌트의 생명주기는 컴포넌트가 생성된 후부터 컴포넌트가 제거될 때까지의 흐름을 말한다.
* 각 생명주기마다 실행할 수 있는 메소드를 옵션 객체를 통해서 등록할 수 있다.
  ```html
  <script>
    export default {
      beforeCreate() {
        // 컴포넌트 인스턴스가 생성되기 전에 호출
      }
      created() {
        // 컴포넌트 인스턴스가 생성된 후에 호출
      },
      beforeMount() {
        // 컴포넌트가 DOM에 마운트되기 전에 호출
      }
      mounted() {
        // 컴포넌트가 DOM에 마운트된 후에 호출
      },
      beforeUpdate() {
        // 데이터가 변경되어 DOM이 업데이트되기 전에 호출
      }
      updated() {
        // 데이터가 변경되고 DOM이 업데이트된 후에 호출
      },
      beforeUnmount() {
        // 컴포넌트 인스턴스가 언마운트되기 전에 호출
      }
      unmounted() {
        // 컴포넌트 인스턴스가 언마운트된 후에 호출
      }
    };
  </script>
  ```
## 이벤트 처리와 스타일 적용
### 1. 이벤트 처리
* Vue에서는 `v-on` 디렉티브를 이용해서 이벤트를 처리할 수 있다.
* 이벤트를 처리할 핸들러 메소드는 컴포넌트에 등록한 메소드로 연결할 수 있다.
  ```html
  <button v-on:click="btnClick">버튼</button>
  ```
* 또한 아래의 예시와 같이 `v-on` 디렉티브는 `@`로 줄여 쓸 수 있다.
  ```html
  <button @click="btnClick">버튼</button>
  ```
### 2. 이벤트 수식어(Event Modifier)
* Vue에서는 다양한 이벤트와 관련된 문제를 쉽게 해결하기 위해 `이벤트 수식어`를 제공한다.
  * `prevent` 이벤트 수식어는 기본 이벤트의 실행을 막는다.
  * `stop` 이벤트 수식어는 이벤트 전파를 중단 시킨다.
  * `capture` 이벤트 수식어는 이벤트 포착 단계 (Capturing Phase)에서만 이벤트가 발생한다.
  * `self` 이벤트 수식어는 이벤트 발생 단계 (Raising Phase)에서만 이벤트가 발생한다.
  * `once` 이벤트 수식어는 한 번만 이벤트를 발생시키고 이벤트 연결을 해제한다.
  * `enter` 이벤트 수식어는 키보드 이벤트 발생 시 엔터키를 누를 때만 이벤트가 발생한다.
  * `left`, `right` 이벤트 수식어는 마우스 이벤트 발생 시 특정 버튼을 클릭할 때만 이벤트가 발생한다.
### 3. 스타일 적용
* 인라인 스타일을 적용할 때는 `v-bind:style`로 스타일을 작성한다.
  ```html
  <!-- 단, 스타일은 자바스크립트 객체로 작성해서 전달해야 한다. -->
  <div v-bind:style="{backgroundColor: 'green', width: '200px', height: '200px'}"></div>
  ```
* CSS를 적용시킬 클래스 속성을 지정하기 위해서는 `v-bind:class`를 사용하여 지정할 수 있다.
  ```html
  <style>
    .btnDelete {
      color: #ffffff;
      background-color: #f04c5c;
    }
  </style>

  <button v-bind:class="'btnDelete'">삭제</button>
  <button :class="{btnDelete: true}">삭제</button>
  ```
## 속성(Props)과 이벤트(Event) 발신
### 1. 속성(Props)
* 컴포넌트들은 `속성(Props)`을 통해서 자식 컴포넌트로 정보를 전달할 수 있다.
* 자식 컴포넌트는 `props` 옵션으로 속성을 정의한다.
  ```html
  <!-- 자식 컴포넌트 -->
  <script>
    export default {
      props: ['name'],
      ...
    }
  </>
  ```
* 부모 컴포넌트는 `v-bind` 디렉티브를 이용해 자식 컴포넌트의 속성에 정보를 전달한다.
  ```html
  <!-- 부모 컴포넌트  -->
  <template>
    <div>
      <컴포넌트명 v-bind:name="속성값"/>
    </div>
  </template>
  ```
### 2. 이벤트(Event) 발신
* 자식 컴포넌트에서 부모 컴포넌트로 정보를 전달할 때는 `이벤트(Event)`를 이용한다.
* 자식 컴포넌트는 `$emit()` 메소드로 이벤트를 발신한다.
  ```html
  <!-- 자식 컴포넌트 -->
  <template>
    <div>
      <button @click="$emit('이벤트명', { 전달할 정보 })">이벤트 발신</button>
    </div>
  </template>
  ```
* 부모 컴포넌트는 `v-on` 디렉티브를 이용해 발신된 이벤트를 수신한다.
  ```html
  <!-- 부모 컴포넌트  -->
  <template>
    <div>
      <컴포넌트명 v-on:이벤트명="이벤트핸들러"/>
    </div>
  </template>
  ```
## Composition API
### 1. Composition API
* Composition API는 대규모 Vue 애플리케이션에서 컴포넌트의 로직을 효과적으로 구성하고 재사용할 수 있도록 만든 함수 기반의 API이다.
### 2. setup() 메소드
* Composition API에서는 `data`, `methods`, `computed` 옵션이 사라지고 초기화 작업을 수행하는 `setup()` 옵션 메소드를 이용해 컴포넌트의 상태를 초기화한다.
* `setup()` 옵션 메소드 내부에 반응성을 가진 `상태 데이터`, `계산된 속성`, `메소드`, `생명주기 훅`을 작성할 수 있다.
* `setup()` 내부에서 작성한 데이터나 메소드를 템플릿에서 이용하고 싶다면 객체 형태로 리턴해야 한다.
  ```html
  <script>
    export default {
        setup () {
          ...
        }
    }
  </script>
  ```
### 3. 반응성을 가진 상태 데이터
* `ref()`는 기본 타입의 데이터를 반응성을 가진 데이터로 생성할 때 사용한다.
  ```html
  <script>
    import { ref } from 'vue';

    export default {
        setup () {
          const name = ref('홍길동');
          const age = ref(34);

          return {name, age};
        }
    }
  </script>
  ```
* `reactive()`는 객체 타입의 데이터를 반응성을 가진 데이터로 생성할 때 사용한다.
  ```html
  <script>
    import { reactive } from 'vue';

    export default {
        setup () {
          const user = reactive({name: '홍길동', age: 34});

          return {user};
        }
    }
  </script>
  ```
### 4. 계산된 속성
* Composition API에서도 계산형 속성과 동일한 기능을 `computed()` 함수를 이용해 작성할 수 있다.
  ```html
  <script>
    import { ref } from 'vue';
    import { computed } from 'vue';

    export default {
        setup () {
          const number = ref(10);
          const sqrt = computed(() => number.value * number.value);

          return {number, sqrt};
        }
    }
  </script>
  ```
### 5. 생명주기 훅(Life Cycle Hook)
* 옵션 API에서의 생명주기 메소드에 대응되는 Composition API의 생명주기 훅이 존재한다.
* `beforeCreate()`, `create()` 메소드의 기능을 `setup()`으로 대체한다.
* 나머지 생명주기 메서드는 앞에 `on` 접두어를 붙인 함수로 바뀐다.
  ```html
  <script>
    export default {
        setup () {
          onBeforeMount() {
            // 컴포넌트가 DOM에 마운트되기 전에 호출
          }
          onMounted() {
            // 컴포넌트가 DOM에 마운트된 후에 호출
          },
          onBeforeUpdate() {
            // 데이터가 변경되어 DOM이 업데이트되기 전에 호출
          }
          onUpdated() {
            // 데이터가 변경되고 DOM이 업데이트된 후에 호출
          },
          onBeforeUnmount() {
            // 컴포넌트 인스턴스가 언마운트되기 전에 호출
          }
          onUnmounted() {
            // 컴포넌트 인스턴스가 언마운트된 후에 호출
          }
        }
    }
  </script>
  ```
## vue-router를 이용한 라우팅
### 1. vue-router
* 웹 애플리케이션에서 라우팅이라는 개념은 사용자가 요청한 URL에 따라 알맞은 페이지를 보여주는 것을 의미한다.
* 사용자가 요청한 URI 경로에 따라 각각 다른 화면이 렌더링 되도록 하기 위해서 Vue.js에서는 `vue-router` 라이브러리를 이용한다.
  ```bash
  > npm install vue-router@4
  ```
### 2. vue-router의 사용법
* `vue-router` 라이브러리의 `createRouter()` 함수를 호출해 `router` 객체를 생성한다.
  ```js
  import { createRouter, createWebHistory } from 'vue-router';

  const router = createRouter({
    // 속성에는 라우터가 사용할 라우팅 모드 지정 (HTML 5 모드)
    history: createWebHistory(),
    // 요청 경로에 따라 렌더링 할 컴포넌트 지정
    routes: [
      {path: '/', component: Home},
      {path: '/about', component: About},
      // 실행에 필요한 파라미터 값을 포함한 URI 경로 설정
      {path: '/members/:id', component: Members}
    ]
  });

  export default router;
  ```
* 생성한 `router` 객체는 애플리케이션 인스턴스에 등록해야 한다.
  ```js
  import { createApp } from 'vue';
  import App from './App.vue';
  import router from './router';

  const app = createApp(App);

  app.use(router);
  app.mount('#app');
  ```
* `RouterView` 컴포넌트를 사용해 `router` 객체의 각 경로별 컴포넌트를 렌더링 할 위치를 지정한다.
* 화면 전환을 위한 링크를 만들고 싶다면 `RouterLink` 컴포넌트를 사용한다.
  ```html
  <template>
    <div>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>

      <RouterView></RouterView>
    </div>
  </template>
  ```
### 3. router 객체와 currentRoute 객체
* 애플리케이션 인스턴스에 `router`를 주입하면 모든 컴포넌트 트리에서 `router` 객체와 `currentRoute` 객체를 이용할 수 있다.
  ```html
  <script setup>
    import {useRouter, useRoute} from 'vue-router';
    
    const route = useRouter();
    const currentRoute = useRoute();
  </script>
  ```
* `router` 객체의 주요 메소드
  * `go(n)` 메소드는 `n` 만큼 브라우저 히스토리를 이용해 이동한다.
  * `back()` 메소드는 `go(-1)`과 같다.
  * `forward()` 메소드는 `go(1)`과 같다.
  * `push(to)` 메소드는 지정된 경로로 이동하고 브라우저 히스토리에 이동 경로를 추가한다.
  * `replace(to)` 메소드는 지정된 경로로 이동하지만 브라우저 히스토리에 새롭게 추가하지 않는다.
* `currentRoute` 객체의 주요 속성
  * `fullpath` 속성은 전체 요청 경로를 담고 있다.
  * `params` 속성은 URI 경로에 동적으로 전달된 파라미터 정보를 담고 있다.
  * `path` 속성은 요청 URI 경로를 담고 있다.
  * `query` 속성은 쿼리 스트링 정보를 담고 있다.
