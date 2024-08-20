<template>
    <div>
        <h2>학과 상세 조회</h2>

        <!-- <p>{{ currentRoute.fullPath }}</p>
        <p>{{ currentRoute.path }}</p>
        <p>{{ currentRoute.params }}</p>
        <p>{{ currentRoute.params.no }}</p>
        <p>{{ currentRoute.query }}</p>
        <p>{{ currentRoute.query.name }}</p>
        <p>{{ parseInt(currentRoute.query.age)}}</p> -->


        <DepartmentForm submitButtonText="학과 수정" :initFormData="initFormData" @form-submit="formSubmit"/>


    </div>
</template>

<script setup>
    import {ref, onMounted} from 'vue';
    import { useRoute } from 'vue-router';
    import DepartmentForm from '@/components/DepartmentForm.vue';
    import apiClient from '@/api';

    const currentRoute = useRoute();
    const initFormData = ref({
        name:'',
        category:'',
        openYn:'',
        capacity:0
    });

    const fetchDepartment = async(departmentNo)=>{
        try{
            const response = await apiClient.get(`/departments/${departmentNo}`);
            // console.log(res);
            initFormData.value = response.data.result;
        }catch(err){
            console.log(err);
        }
    }

    const formSubmit = async(formData)=>{
        try{
            const response = await apiClient.put(`/departments/${formData.no}`,formData);

            if (response.data.code===200){
                alert("정상적으로 수정되었습니다.");

            }
        }catch(err){
            console.log(err);
        }
    }

    onMounted(()=>{
        fetchDepartment(currentRoute.params.no);
    })
</script>

<style scoped>

</style>