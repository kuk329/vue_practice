<template>
    <div>
        <label for="num1">첫 번째 수 : </label>
        <input type="text" id="num1" v-model.number="num1">

        <br>

        <label for="num2">두 번째 수 : </label>
        <input type="text" id="num2" v-model.number="num2">

        <br><br>

        <button @click="add">계산하기</button>

        <p>
            결과 : {{ result }}
        </p>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup () {
        const num1 = ref(10);
        const num2 = ref(20);
        const result = ref(30);

        // setup () 내부에서 ref() 지정한 데이터를 이용할 때는 value 속성을 이용해야 한다.
        const add = () => {
            result.value = num1.value + num2.value;
        };

        return {num1, num2, result, add}
    }
}
</script>

<style lang="scss" scoped>

</style>