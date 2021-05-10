<template>
  <div id="app">
    <div class="wrap">
      <div class="nav">
        <TodoHeader/> <!--logo, time-->
        <TodoTitle/> <!--인사말, task 개수-->
        <TodoInput/> <!--task list-->
      </div>
      <section>
        <TodoController/> <!---->
        <TodoTaskList/> <!--task list-->        
      </section>      
      <TodoFooter/> <!---->
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoTitle from './components/TodoTitle.vue';
import TodoInput from './components/TodoInput.vue';
import TodoController from './components/TodoController.vue';
import TodoTaskList from './components/TodoTaskList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoTitle,
    TodoInput,
    TodoController,
    TodoTaskList,
    TodoFooter
  }
}
</script>

<style>
    @import '~reset-css-complete/reset.css';
    @import './assets/style/common.css';
</style>
