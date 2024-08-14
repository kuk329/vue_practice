<template>
    <div>
        <h3>첫 번째 탭 입니다.</h3>
        <p>
            {{  new Date().toLocaleString() }}
        </p>
    </div>
</template>

<script>
    export default {
        name: 'DynamicTab1'
    }
</script>