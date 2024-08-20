<template>
    <div>
        <table class="table table-striped table-hover text-center">
            <thead>
                <tr>
                    <th>학과 번호</th>
                    <th>학과 이름</th>
                    <th>계열</th>
                    <th>개설 여부</th>
                    <th>정원</th>
                    <th>삭제</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="dept in departments" :key="dept.no"
                    @click.stop="emit('item-click', dept.no)">
                    <td>{{dept.no}}</td>
                    <td>{{ dept.name }}</td>
                    <td>{{ dept.category }}</td>
                    <td>{{ dept.openYn }}</td>
                    <td>{{ dept.capacity }}</td>
                    <td><button class="btn btn-outline-danger" 
                        @click.stop="confirmDelete(dept.no)">삭제</button></td>
                </tr>
            </tbody>

        </table>

    </div>
</template>

<script setup>

//   const props =  defineProps(['departments'])
const props =  defineProps({
    departments: {
        type:Array,
        required:true
    }
});


const emit = defineEmits(['delete-department','item-click']); // 발신할 이벤트 이름 정의

const confirmDelete = (departmentNo)=>{
    if(confirm('정말로 삭제하시겠습니까?')){
    //    console.log(departmentNo);
        emit('delete-department',departmentNo);
    }
 };


const deleteDept =(e)=>{
    console.log(e.target.value);
    alert('삭제');
}

</script>

<style lang="scss" scoped>

</style>