<template>
    <div>
        <label for="num1">첫 번째 수 : </label>
        <input type="text" id="num1" v-model.number="state.num1">

        <br>

        <label for="num2">두 번째 수 : </label>
        <input type="text" id="num2" v-model.number="state.num2">

        <br><br>

        <button @click="add">계산하기</button>

        <p>
            결과 : {{ state.result }}
        </p>
    </div>
</template>

<script>
import { reactive } from 'vue';

export default {
    setup () {
        const state = reactive({num1: 10, num2: 20, result: 30});

        const add = () => {
            state.result = state.num1 + state.num2;
        };

        return {state, add}
    }
}
</script>

<style scoped>

</style>