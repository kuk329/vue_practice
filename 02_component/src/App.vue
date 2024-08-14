<template>
  <div>
    <h2>컴포넌트</h2>
    <h3>1. Props</h3>
    <ul>
      <!-- 속성을 전달하는 방법은 v-bind 디렉티브를 사용한다. 
      <CheckboxItem v-for="student in students" :key="student.no"
      :no="student.no" :name="student.name" :checked="student.checked"/>
      -->
      <CheckboxItem 
          v-for="student in students" :key="student.no" :student="student"
          @checkboxChanged="checkboxChanged"/>
    </ul>

    <h3>2. 이벤트 발신</h3>
    <InputName @nameChanged="nameChanged"/>

    <h4>이벤트 수신 : {{ name }}</h4>

    <h3>3. 이벤트 에미터 사용</h3>

    <Sender/>

    <Receiver/>

    <h3>4. 슬롯(Slot)</h3>
    <p>
      부모 컴포넌트에서 자식 컴포넌트로 템플릿 정보를 전달하는 방법을 제공한다.
    </p>

    <SlotTest/>

    <h3>5. 동적 컴포넌트</h3>
    <p>
      동일한 위치에 여러 컴포넌트를 표현할 수 있는 방법을 제공한다.
    </p>

    <DynamicTest/>

    <h3>6. provide, inject를 이용한 공통 데이터 사용</h3>

    <SongList :songs="songs"/>

    
  </div>
</template>

<script>
  import Student from './Student';
  import CheckboxItem from './components/CheckboxItem.vue';
  import InputName from './components/InputName.vue';  
  import Sender from './components/Sender.vue';
  import Receiver from './components/Receiver.vue';
  import SlotTest from './components/SlotTest.vue';
  import DynamicTest from './components/DynamicTest.vue';
  import SongList from './components/SongList.vue';

  export default {
    name: 'App',
    components: {
      CheckboxItem,
      InputName,
      Sender,
      Receiver,
      SlotTest,
      DynamicTest,
      SongList
    },
    data() {
      return {
        students: [
          // {no: 'S001', name: '홍길동', checked: true},
          // {no: 'S002', name: '임꺽정', checked: false},
          // {no: 'S003', name: '이몽룡', checked: false},
          // {no: 'S004', name: '성춘향', checked: false}
          new Student('S001', '홍길동', true),
          new Student('S002', '임꺽정', false),
          new Student('S003', '이몽룡', false),
          new Student('S004', '성춘향', false)
        ],
        name: '',
        songs: [
          {id: 1, title:'Supernova', done: true},
          {id: 2, title:'클락션', done: false},
          {id: 3, title:'How Sweet', done: false}
        ]
      }
    },
    methods: {
      nameChanged(e) {
        console.log(e);

        this.name = e.name;
      },
      checkboxChanged(e) {
        console.log(e);

        const student = this.students.find((s) => s.no === e.no);

        student.checked = e.checked;
      }
    },
    provide() {
      return {
        icons: {
          checked: 'check',
          unchecked: 'close'
        }
      };
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,200,0,0');
</style>