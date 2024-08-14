<template>
    <div>
        <h4>Sender</h4>
        
        <button @click="sendMessage">이벤트 발신</button>
    </div>
</template>

<script>
    export default {
        name: 'Sender',
        methods: {
            sendMessage() {
                const now = new Date();
                
                this.emitter.emit('sendMessage', `${now.toLocaleString()}에 발신된 메시지`);
            }
        },
    }
</script>