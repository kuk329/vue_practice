<template>
    <div>
        <label for="num1">첫 번째 수 : </label>
        <input type="text" id="num1" v-model.number="state.num1">

        <br>

        <label for="num2">두 번째 수 : </label>
        <input type="text" id="num2" v-model.number="state.num2">

        <p>
            결과 : {{ result }}
        </p>
    </div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
    setup () {
        const state = reactive({num1: 10, num2: 20});
        const result = computed(() => state.num1 + state.num2);

        console.log(result.value);

        return {state, result}
    }
}
</script>

<style scoped>

</style>