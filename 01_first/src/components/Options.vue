<template>
    <div>
        <h3>옵션 객체</h3>

        <h4>계산된 속성</h4>
        <label for="number">1보다 큰 수 : </label>
        <input type="number" id="number" v-model.number="number">

        <p>
            입력한 수의 제곱 : <span v-text="sqrt"></span>
            <br>
            입력한 수의 제곱 : <span v-text="sqrt"></span>
        </p>

        <h4>메소드</h4>

        <p>
            1부터 입력한 값까지의 합 : <span v-text="sum()"></span>
            <br>
            1부터 입력한 값까지의 합 : <span v-text="sum()"></span>
        </p>

        <h4>관찰 속성</h4>
        <label for="x">x : </label>
        <input type="number" id="x" v-model.number="valuse.x">

        <br>
        
        <label for="y">y : </label>
        <input type="number" id="y" v-model.number="valuse.y">

        <p>
            두 수의 뺄셈 결과 : <span v-text="sub"></span>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Options',
        data() {
            return {
                number: 0,
                // x: 0, 
                // y: 0,
                valuse: {
                    x: 0,
                    y: 0
                },
                sub: 0
            }
        },
        // 라이브 사이클 관련 메소드
        created () {
            console.log('created () - 호출');
        },
        mounted () {
            console.log('mounted() - 호출');
        },
        updated () {
            console.log('updated () - 호출');
        },
        computed: {
            sqrt() {
                return this.number * this.number;
            }
        },
        methods: {
            sum() {
                return (this.number * (this.number + 1)) / 2;
            }
        },
        watch: {
            // x(newValue, oldValue) {
            //     this.sub = newValue - this.y;
            // },
            // y(newValue, oldValue) {
            //     this.sub = this.x - newValue;
            // }
            valuse: {
                handler(newValue) {
                    this.sub = newValue.x - newValue.y;
                },
                deep: true
            }
        },
    }
</script>