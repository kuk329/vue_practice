<template>
    <div>
        <h2>학과 목록 조회</h2>

        <DepartmentList :departments="departments"/>
        <PageNation />

    </div>
</template>


<script setup>
    import apiClient from '@/api';
    import {ref, onMounted} from 'vue';
    import DepartmentList from "@/components/DepartmentList.vue";
    import {useRoute} from 'vue-router';
    import PageNation from '@/components/PageNation.vue';

    const departments = ref([]);
    const currenetRoute = useRoute();
    const currentPage = ref(Number(currenetRoute.query.page) || 1);


    
    console.log(currentPage.value);
    console.log(currenetRoute.query.page);
    console.log(parseInt(currenetRoute.query.page));
    console.log(parseInt(currenetRoute.query.page)|| 1);


    // axios 사용 방법
    // const fetchDepartments = ()=>{
    //     apiClient.get('/departments?page=1&numOfRows=10')
    //              .then((res)=>{
    //                 console.log(res);
    //              })
    //              .catch((err)=>{
    //                 console.log(err);
    //              });
    // }

    // async / await (비동기 통신)
    const fetchDepartments = async(page)=>{
        try{
            const res = await apiClient.get(`/departments?page=${page}&numOfRows=10`);

         //   console.log(res);

            departments.value = res.data.result;
            console.log(departments.value);

        }catch(err){ // 예외 발생시 해당 예외를 받아서 출력

            console.log(err);
        }
       
    }

    onMounted(()=>{
        fetchDepartments(currentPage.value);
    })
</script>

<style scoped>

</style>