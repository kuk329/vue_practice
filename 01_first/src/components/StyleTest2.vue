<template>
    <div>
        <h3 :class="$style.title">CSS 모듈 테스트</h3>

        <div :class="$style.div"></div>
    </div>
</template>

<script>
    export default {
        name: 'StyleTest2',
        created () {
            console.log(this.$style);
        },
    }
</script>

<style module>
    .title {
        background-color: orangered;
        color: white;
    }

    .div {
        background-color: purple;
        width: 100px;
        height: 100px;
    }
</style>