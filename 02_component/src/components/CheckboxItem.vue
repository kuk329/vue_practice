<template>
    <li>
        <label>
            <!-- <input type="checkbox" :checked="checked"> {{ no }} - {{ name }} -->
            <input type="checkbox" :checked="student.checked"
                @change="$emit('checkboxChanged', {no: student.no, checked: $event.target.checked})"> {{ student.no }} - {{ student.name }}
        </label>
    </li>
</template>

<script>
    import Student from '@/Student';

    export default {
        name: 'CheckboxItem',
        // props 옵션으로 전달받을 속성을 정의한다.
        // props: ['no', 'name', 'checked'],
        // props: {
        //     no: String,
        //     name: {
        //         validator(value) {
        //             return typeof(value) !== 'string' ? false : 
        //                 value.length >= 2 ? true : false;
        //         }
        //     },
        //     checked : {
        //         type: Boolean,
        //         required: false,
        //         default: false
        //     }
        // },
        // props: ['student'],
        props: {
            student: Student
        },
        emits: ['checkboxChanged'],
        created () {
            // props에 등록된 속성을 변경하려고 하면 에러가 발생한다.
            // this.checked = false;
            // 참조형으로 속성을 전달받으면 내부 속성을 변경할 수 있지만 변경하지 않도록 해야 한다.
            // this.student.checked = true;
        },
    }
</script>