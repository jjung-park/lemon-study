<template>
  <div id="app">
    <div class="wrap">
      <div class="nav">
        <TodoHeader/> <!--logo, time-->
        <TodoTitle :propsData="checkCount"/> <!--인사말, task 개수-->
        <TodoInput v-on:addItem="addOneItem"/> <!--task list-->
      </div>
      <section>
        <TodoController v-on:clearAll="clearAllItem"/> <!---->
        <TodoTaskList 
          :propsData="todoItems"
          v-on:removeItem="removeOneItem"
          v-on:toggleItem="toggleOneItem"
        /> <!--task list-->        
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

import getDate from "./components/common/getDate.js"


export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoTitle,
    TodoInput,
    TodoController,
    TodoTaskList,
    TodoFooter
  },
  data(){
    return{
      todoItems:[]
    }
  },
  created(){
        if(localStorage){
            for(let i = 0; i < localStorage.length; i++){
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    this.todoItems.push(
                        JSON.parse(localStorage.getItem(localStorage.key(i)))
                    )
                }
            }
        }
    },
    computed:{
      checkCount(){
        const checkLeftItems = () => {
          let leftCount = 0;
          for (let i=0; i < this.todoItems.length; i++){
            if(this.todoItems[i].completed === false){
              leftCount++;
            }
          }
          return leftCount
        }

        const count = {
          total:this.todoItems.length,
          left:checkLeftItems()
        };
        return count
      }
    },
    methods:{
      addOneItem(todoItem){
        var value = {
            item : todoItem,
            data: `${getDate().date}/${getDate().week}`,
            tiem:getDate().time,
            completed:false,
        }
        
        localStorage.setItem(todoItem, JSON.stringify(value));
        this.todoItems.push(value)
        //실행 후 input은 리셋
      },
      toggleOneItem(todoItem){
        todoItem.completed = !todoItem.completed
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
      },
      removeOneItem(todoItem, index){
        localStorage.removeItem(todoItem.item);
        this.todoItems.splice(index,1)
      },
      clearAllItem(){
        this.todoItems = [];
        localStorage.clear()
      },
      

    }
}
</script>

<style>
    @import '~reset-css-complete/reset.css';
    @import './assets/style/common.css';
</style>
