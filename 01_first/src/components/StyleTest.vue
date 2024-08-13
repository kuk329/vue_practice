<template>
    <div>
        <h3>스타일 적용</h3>
        <h4>인라인 스타일</h4>

        <!-- <div v-bind:style="{backgroundColor: 'orange', width: '200px', height: '200px'}"> -->
        <div :style="divStyle"
            @mouseover="overEvent"
            @mouseout="outEvent">
        </div>

        <h4>CSS 클래스 바인딩</h4>
        <label><input type="checkbox" v-model="btnStyle.buttonBackgroundColor" >배경색 적용</label>
        <br>
        <button class="buttonTextColor" :class="btnStyle">버튼 클릭</button>

        <h4>계산된 속성 활용</h4>
        <p>
            1부터 100까지만 입력 가능합니다.
        </p>
        <label>점수 : </label>
        <input type="number" :class="info" v-model.number="score">
        <br>
        <span v-if="info.warning">1부터 100까지만 입력하세요.</span>
    </div>
</template>

<script>
    export default {
        name: 'StyleTest',
        data() {
            return {
                divStyle: {backgroundColor: 'orange', width: '200px', height: '200px'},
                // btnStyle: 'buttonBackgroundColor'
                btnStyle: {buttonBackgroundColor: true},
                score: 50
            }
        },
        methods: {
            overEvent() {
                this.divStyle.backgroundColor = 'blue';
            },
            outEvent() {
                this.divStyle.backgroundColor = 'green';
            }
        },
        computed: {
            info() {
                return {warning: this.score < 1 || this.score > 100};
            }
        },
    }
</script>

<style scoped>
    .buttonTextColor {
        color: blueviolet
    }
    .buttonBackgroundColor {
        background-color: darkblue;
    }
    .warning {
        background-color: skyblue;
        color: red;
    }
</style>