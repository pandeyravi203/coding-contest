<template>
  <div id="app">
   <routerView></routerView>
  </div>
</template>

<script>
import ProblemSubmission from './components/ProblemSubmission.vue'

export default {
  name: 'app',
  components: {
  ProblemSubmission
  }
  ,
   mounted() {
    this.$router.push('/')
    
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
