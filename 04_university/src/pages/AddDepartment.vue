<template>
    <div>
        <h2>학과 등록</h2>
        <DepartmentForm submitButtonText="학과 등록" :initFormData="formData"/>
    </div>
</template>

<script setup>
    import DepartmentForm from '@/components/DepartmentForm.vue';
    import {ref} from 'vue';

    const formData = ref({
        name:'',
        category:'',
        openYn:'Y',
        capacity:30
    });

</script>
   
<style scoped>

</style>