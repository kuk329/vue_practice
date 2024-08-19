<template>
  <div>
    <h2>Composition API</h2>

    <h3>1. 반응성을 가진 상태 데이터</h3>
    <!-- <Calc1/> -->
    <Calc2/>

    <h3>2. 계산된 속성</h3>
    <Calc3/>

    <h3>3. 관찰 속성</h3>
    <!-- <Calc4/> -->
    <Calc5/>

    <h3>4. &lt;script setup&gt; 사용하기</h3>
    <p>
      number : {{ number }}
    </p>

    <button @click="sqrt">계산하기</button>

  </div>
</template>

<script setup>
import Calc1 from './components/Calc1.vue';
import Calc2 from './components/Calc2.vue';
import Calc3 from './components/Calc3.vue';
import Calc4 from './components/Calc4.vue';
import Calc5 from './components/Calc5.vue';
import { ref } from 'vue';

const number = ref(10);
const sqrt = () => {
  number.value = number.value * number.value;
}
</script>

<!-- 
<script>
import Calc1 from './components/Calc1.vue';
import Calc2 from './components/Calc2.vue';
import Calc3 from './components/Calc3.vue';
import Calc4 from './components/Calc4.vue';
import Calc5 from './components/Calc5.vue';

export default {
  setup () {
    

    return {}
  },
  components: {
    Calc1,
    Calc2,
    Calc3,
    Calc4,
    Calc5
  }
}
</script> 
-->

<style scoped>

</style>