<template>
    <div>
        <form>
            <div class="mb-3">
                <label for="name" class="form-label">학과 이름</label>
                <input type="text" class="form-control" id="name">

            </div>
            <div class="mb-3">
                <label for="category" class="form-label">계열</label>
                <input type="text" class="form-control" id="category">
            </div>

            <div class="mb-3">
                <label for="openYn" class="form-label">개설 여부</label>
                <select class="form-select" >
                    <option value="Y">예(Y)</option>
                    <option value="N">아니오(N)</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="capacity" class="form-label">정원</label>
                <input type="number" class="form-control" id="capacity">
            </div>
            <button type="submit" class="btn btn-primary">{{submitButtonText }}</button>
        </form>

    </div>
</template>

<script setup>
import {ref,watch} from 'vue';
    const props = defineProps({
    submitButtonText:String,
    initFormData:Object
});

const formData = ref({});

watch(props.initFormData,
    (newFormData)=>{
        formData.value = {...newFormData}; // 구조 분해 할당
    },
    {immediate:true}
)

</script>

<style lang="scss" scoped></style>