<template>
    <div>
        <!-- 
        <label>
            <input type="checkbox" :value="id" :checked="checked"
                @change="$emit('checkChange', {id, checked: $event.target.checked})">
            <slot></slot> 사이에는 부모 컴포넌트로부터 전달받는 템플릿이 없을 때 보여줄 UI를 작성한다. 
            <slot>레이블 없음</slot>
        </label>
        -->

        <!-- 
        <label>
            <slot name="icon"></slot>

            <input type="checkbox" :value="id" :checked="checked"
                @change="$emit('checkChange', {id, checked: $event.target.checked})">
            
            <slot name="label">레이블 없음</slot> 
            <slot>레이블 없음</slot>
        </label>
        -->

        <label>
            <!-- 아래의 슬롯에서 부모 컴포넌트로 checked, label 값을 전달한다. -->
            <slot name="icon" :checked="item.checked"></slot>

            <input type="checkbox" :value="item.id" :checked="item.checked"
                @change="$emit('checkChange', {id: item.id, checked: $event.target.checked})">
            
            <slot :checked="item.checked" :label="item.label">레이블 없음</slot>
        </label>

    </div>
</template>

<script>
    export default {
        name: 'SlotItem',
        // props: ['id', 'checked']
        props: ['item']
    }
</script>