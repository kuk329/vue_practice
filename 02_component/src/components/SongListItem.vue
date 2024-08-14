<template>
    <li>
        <span class="material-symbols-outlined"
            v-text="song.done ? icons.checked : icons.unchecked "
        ></span>
        {{ song.title }}
    </li>
</template>

<script>
    export default {
        name: 'SongListItem',
        props: ['song'],
        inject: ['icons']
    }
</script>