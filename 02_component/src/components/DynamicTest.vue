<template>
    <div>
        <ul>
            <li v-for="tab in tabs" :key="tab.id">
                <a v-text="tab.label" @click="changeTab(tab.id)"></a>
            </li>
        </ul>
        <component :is="currentTab"></component>
    </div>
</template>

<script>
    import DynamicTab1 from './DynamicTab1.vue';
    import DynamicTab2 from './DynamicTab2.vue';
    import DynamicTab3 from './DynamicTab3.vue';

    export default {
        name: 'DynamicTest',
        components: {
            DynamicTab1,
            DynamicTab2,
            DynamicTab3
        },
        data() {
            return {
                currentTab: 'DynamicTab1',
                tabs: [
                    {id: 'DynamicTab1', label: 'Tab1 입니다.'},
                    {id: 'DynamicTab2', label: 'Tab2 입니다.'},
                    {id: 'DynamicTab3', label: 'Tab3 입니다.'}
                ]
            }
        },
        methods: {
            changeTab(id) {
                this.currentTab = id;
            }
        }
    }
</script>