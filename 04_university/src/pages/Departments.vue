<template>
    <div>
        <h2>학과 목록 조회</h2>

        <DepartmentList :departments="departments"/>
        <PageNation/>
    </div>
</template>

<script setup>
    import DepartmentList from '@/components/DepartmentList.vue';
    import PageNation from '@/components/PageNation.vue';
    import apiClient from '@/api';
    import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router';

    const departments = ref([]);
    const currentRoute = useRoute();
    const currentPage = ref(parseInt(currentRoute.query.page) || 1);


    // axios 사용 방법
    // const fetchDepartments = () => {
    //     apiClient.get('/departments?page=1&numOfRows=10')
    //             .then((response) => {
    //                 console.log(response);
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //             });
    // };

    // async / await
    const fetchDepartments = async (page) => {
        try {
            const response = await apiClient.get(`/departments?page=${page}&numOfRows=10`);

            console.log(response);

            departments.value = response.data.result;

        } catch (error) {
            console.log(error);
        }
    };

    onMounted(() => {
        fetchDepartments(currentPage.value);
    });
</script>

<style scoped>

</style>