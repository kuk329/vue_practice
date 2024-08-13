<template>
    <div>
        <h3>이벤트 처리</h3>
        <h4>이벤트 처리 방법</h4>

        <label for="price">금액 : </label>
        <input type="text" id="price" v-model="price">
        
        <br><br>

        <!--  
        <button v-on:click="balance += parseInt(price)">입금</button>
        <button v-on:click="balance -= parseInt(price)">출금</button>
        -->
        <button @click="deposit">입금</button>
        <button @click="withdraw">출금</button>

        <p>
            잔액은 <span v-text="balance"></span>원 입니다.
        </p>

        <h4>기본 이벤트</h4>
        <!-- <a @contextmenu="(e) => e.preventDefault()" @click="confirmNaver" href="https://www.naver.com">네이버로</a> -->
        <a @contextmenu.prevent @click="confirmNaver" href="https://www.naver.com">네이버로</a>

        <h4>이벤트 수식어</h4>
        <button @click.once="onceClick">버튼 클릭</button>

        <br><br>

        <input type="text" v-model.trim="name" @keyup.enter="nameEnter">

        <br><br>

        <button @contextmenu.prevent
                @click.left="name = '홍길동'"
                @click.right="name = '이몽룡'"
                @click.ctrl.left="name = '임꺽정'">버튼 클릭</button>
    </div>
</template>

<script>
    export default {
        name: 'Events',
        data() {
            return {
                price: 0,
                balance: 0,
                name: ''
            }
        },
        methods: {
            deposit() {
                const price = parseInt(this.price);

                if (price <= 0) {
                    alert('0보다 큰 값을 입금해야 합니다.');
                } else {
                    this.balance += price;
                }
            },
            withdraw() {
                const price = parseInt(this.price);
                
                if (price <= 0) {
                    alert('0보다 큰 값을 출금해야 합니다.');
                } else if (price > this.balance) {
                    alert('잔액보다 많은 금액을 출금할 수 없습니다.');
                } else {
                    this.balance -= price;
                }
            },
            confirmNaver(e) {
                if (!confirm('정말로 이동하시겠습니까?')) {
                    e.preventDefault();
                }
            },
            onceClick() {
                alert('한 번만 실행한다.');
            },
            nameEnter(e) {
                // if(e.keyCode == 13) {
                alert(`이름은 ${this.name} 입니다.`);
                // }
            }
        },
    }
</script>