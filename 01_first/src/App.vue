<template>
  <main>
    <h2>Vue.js 기초</h2>
    <Directive1/>
    <Directive2/>
    <Options/>
  </main>
</template>

<script>
  import Directive1 from './components/Directive1.vue';
  import Directive2 from './components/Directive2.vue';
  import Options from './components/Options.vue';

  export default {
    name: 'App',
    components: {
      Directive1, // Directive1: Directive1
      Directive2,
      Options
    }
  }
</script>

<style scoped>

</style>