<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Title from './components/Title.vue'
import Input from './components/Input.vue'
import Controller from './components/Controller.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Title,
    Input,
    Controller,
    List,
    Footer
  }
}
</script>

<style>

</style>
