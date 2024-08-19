<template>
    <div>
        <h2>404 Not Found</h2>
        <p>
            존재하지 않는 경로 : {{ currentRoute.fullPath }}
        </p>
    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router';

    const currentRoute = useRoute();
</script>
