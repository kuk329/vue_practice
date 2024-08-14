<template>
    <div>
        <label for="userName">이름 : </label>
        <input type="text" id="userName" v-model="name">
        <button @click="$emit('nameChanged', { name })">이벤트 발신</button>
    </div>
</template>

<script>
    export default {
        name: 'InputName',
        emits: ['nameChanged'],
        data() {
            return {
                name: ''
            }
        },
    }
</script>