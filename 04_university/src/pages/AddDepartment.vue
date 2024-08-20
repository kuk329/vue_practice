<template>
    <div>
        <h2>학과 등록</h2>
        <DepartmentForm submitButtonText="학과 등록" :initFormData="initFormData"
            @form-submit="formSubmit"/>
    </div>
</template>

<script setup>
    import DepartmentForm from '@/components/DepartmentForm.vue';
    import {ref} from 'vue';
    import apiClient from '@/api';
    import {useRoute, useRouter} from 'vue-router';

    const router = useRouter();

    const initFormData = ref({
        name:'',
        category:'',
        openYn:'N',
        capacity:30
    });

    const formSubmit = async(formData)=>{
        //console.log(formData);

        try{
            const response  = await apiClient.post('/departments',formData);
            if(response.data.code===201){
                alert("정상적으로 등록되었습니다.");

                router.push({name:"departments/no",params:{no:response.data.result.no}});
            }

        }catch(err){
            console.log(err);
        }
    }

</script>
   
<style scoped>

</style>