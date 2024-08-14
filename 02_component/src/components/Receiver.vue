<template>
    <div>
        <h4>Receiver</h4>
        <h5>이벤트 수신 : {{ message }}</h5>
    </div>
</template>

<script>
    export default {
        name: 'Receiver',
        created () {
            this.emitter.on('sendMessage', this.receiverHandler);
        },
        data() {
            return {
                message: ''
            };
        },
        methods: {
            receiverHandler(msg) {
                console.log(msg);

                this.message = msg;
            }
        }
    }
</script>