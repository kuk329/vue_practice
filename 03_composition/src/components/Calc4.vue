<template>
    <div>
        <label for="num1">임의의 수 : </label>
        <input type="text" id="num1" v-model.number="num1">

        <p>
            결과 : {{ result }}
        </p>
    </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
    setup () {
        const num1 = ref(10);
        const result = ref(0);

        watch(num1, (current, old) => {
            console.log(`${old} => ${current}`);

            result.value = current * 2;
        });

        return {num1, result}
    }
}
</script>

<style scoped>

</style>