<template>
    <div>
        <h2>학과 목록 조회</h2>

        <DepartmentList :departments="departments" @delete-department="deleteDepartment"
            @item-click="itemClick"/>
        <PageNation :startPage="startPage" :currentPage="currentPage" :endPage="endPage"
         @change-page="changePage"/>

    </div>
</template>


<script setup>
    import apiClient from '@/api';
    import {ref, onMounted,watch} from 'vue';
    import DepartmentList from "@/components/DepartmentList.vue";
    import {useRoute, useRouter} from 'vue-router';
    import PageNation from '@/components/PageNation.vue';

    const departments = ref([]);
    const currentRoute = useRoute();
    const router = useRouter();
   

    // 페이지네이션을 위한 데이터
    const currentPage = ref(Number(currentRoute.query.page) || 1);
    const startPage = ref(0); // 페이징 된 페이지 중에 시작 페이지
    const endPage = ref(0); // 페이징 된 페이지 중 마지막 페이지
    const maxPage = ref(0); // 전체 페이지 중 마지막 페이지
    const pageLimit = 5; // 한 페이지에 보여지는 페이지 수  (변할 값이 아니므로 그냥 변수로 선언)
    const listLimit = 10; // 한 페이지에 표시될 리스트의 수  (변할 값이 아니므로 그냥 변수로 선언)

    // console.log(currentPage.value);
    // console.log(currenetRoute.query.page);
    // console.log(parseInt(currenetRoute.query.page));
    // console.log(parseInt(currenetRoute.query.page)|| 1);


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

            departments.value = res.data.result;
            console.log(departments.value);

            /**
              totalCount = 100, listLimit = 10
              100 / 10 => 10  -> 10개 페이지 필요 
              101 / 10 => 10.1 -> 11개 페이지 필요
              103 / 10 => 10.3 -> 11개 페이지 
              110 / 10 => 11 -> 11개 페이지 
              112 / 10 => 11.2 -> 12개 페이지 
             */

             maxPage.value = parseInt(Math.ceil(res.data.totalCount/listLimit));
             console.log(maxPage.value);

             /*
              * <1 2 3 4 5 6 7 8 9 10>
                <11 12 13 14 15 16 17 18 19>

                // 시작 페이지 구하는 공식
                1, 11, 21, 31, ... => (10 * N) + 1  (N >= 0)


                1 ~ 10 => n = 0
                11 ~ 20 => n = 1
                21 ~ 30 => n = 2
                ....

                N  구하는 방법 : ( 현재 페이지 -1 ) / 해당페이지에 
                N = (currentPage - 1) / pageLimit

                따라서

                시작 페이지   (10 * ((currentPage - 1) / pageLimit)) + 1  (N >= 0)
              */
             startPage.value = (pageLimit * parseInt((page - 1)/ pageLimit )) + 1;


             // 마지막 페이지 구하는 방법
             // 10, 20, 30, 40 ..
             endPage.value = startPage.value + pageLimit - 1;
             endPage.value = endPage.value > maxPage.value ? maxPage.value : endPage.value


        }catch(err){ // 예외 발생시 해당 예외를 받아서 출력

            console.log(err);
        }
       
    }

    onMounted(()=>{
        fetchDepartments(currentPage.value);
    })

    const changePage = (page)=>{
        console.log(page);
        if(page>=1 && page<=maxPage.value){
            router.push({name:'departments',query:{page:page}});
        }
    }

    const deleteDepartment = async(departmentNo)=>{
     //   console.log(departmentNo);

        try{
            const res = await apiClient.delete(`/departments/${departmentNo}`);

            if(res.data.code=== 200){
                alert('정상적으로 삭제되었습니다.');
                fetchDepartments(currentPage.value);

            }else if(res.data.code==404){
                alert('존재하지 않는 학과입니다.');
            }else{
                alert('학과 삭제를 실패했습니다.');
            }


        }catch(error){
            console.log(error);
        }
    }


    const itemClick = (departmenetNo)=>{
      //  console.log(departmenetNo);
        router.push({name:'departments/no',params:{no:departmentNo}});
    }

    watch(currentRoute,()=>{
        currentPage.value = parseInt(currentRoute.query.page) || 1;
        fetchDepartments(currentPage.value);
    });

    
</script>

<style scoped>

</style>