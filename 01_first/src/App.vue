<template>
  <main>
    <h2>Vue.js 기초</h2>
    <!-- <Directive1/> -->
    <!-- <Directive2/> -->
    <!-- <Options/> -->
    <!-- <Events/> -->
    <StyleTest/>
    <StyleTest2/>
  </main>
</template>

<script>
  import Directive1 from './components/Directive1.vue';
  import Directive2 from './components/Directive2.vue';
  import Options from './components/Options.vue';
  import Events from './components/Events.vue';
  import StyleTest from './components/StyleTest.vue';
  import StyleTest2 from './components/StyleTest2.vue';

  export default {
    name: 'App',
    components: {
      Directive1, // Directive1: Directive1
      Directive2,
      Options,
      Events,
      StyleTest,
      StyleTest2
    }
  }
</script>

<style scoped>

</style>