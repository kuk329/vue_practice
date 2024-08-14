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
    
  </div>
</template>

<script>
  import Student from './Student';
  import CheckboxItem from './components/CheckboxItem.vue';
  import InputName from './components/InputName.vue';  
  import Sender from './components/Sender.vue';
  import Receiver from './components/Receiver.vue';

  export default {
    name: 'App',
    components: {
      CheckboxItem,
      InputName,
      Sender,
      Receiver
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
        name: ''
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
  }
</script>

<style scoped>

</style>