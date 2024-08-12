<template>
    <div>
        <!-- <h3>{{ title }}</h3> -->
        <!-- <h3 v-text="title"></h3> -->
        <h3 v-html="title"></h3>
        <!-- <img v-bind:src="imgPath" width="300px"> -->
        <img :src="imgPath" width="300px">

        <div>
            <label for="userId">이름 : </label>
            <!-- <input type="text" id="userId" :value="name"> -->
            <!-- <input type="text" id="userId" v-model="name"> -->
            <!-- <input type="text" id="userId" v-model.lazy="name"> -->
            <!-- <input type="text" id="userId" v-model.trim="name"> -->
            <input type="text" id="userId" v-model.trim.lazy="name">

            <br>

            <label for="age">나이 : </label>
            <!-- 숫자로 변환 가능한 값은 숫자로 변환하고 그렇지 않은 값은 문자열로 받아낸다. -->
            <input type="text" id="age" v-model.number="age">

            <br>

            <label><input type="radio" name="gender" value="남자" v-model="gender">남자</label>
            <label><input type="radio" name="gender" value="여자" v-model="gender">여자</label>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Directive1',
        data() {
            return {
                title: '<i>1. 기본 디렉티브</i>',
                imgPath: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220725_227%2F1658726861689zDxCS_JPEG%2F59862704398955088_122520003.jpg&type=sc960_832',
                name: '홍길동',
                age: 34,
                gender: ''
            }
        }
    }
</script>