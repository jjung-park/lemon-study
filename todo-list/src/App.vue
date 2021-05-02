<template>
  <div id="app">
    <TodoHeader/> <!--logo, time-->
    <TodoTitle/> <!--인사말, task 개수-->
    <TodoInput/> <!--task list-->
    <TodoController/> <!---->
    <TodoTaskList/> <!--task list-->
    <TodoFooter/> <!---->
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

</style>
