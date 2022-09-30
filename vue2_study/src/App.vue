<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <button @click="showDom"></button>
    <School ref="sch"></School>
    <Student :age="11" :name="Hello"></Student>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
  name: 'App',
  components: {
    School,
    Student
  },
  methods: {
    showDom() {
      console.log(this.$refs.sch)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
