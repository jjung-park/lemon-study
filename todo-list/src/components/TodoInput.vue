<template>
    <div class="add">
        <input 
            type="text" 
            class="add__input" 
            placeholder="enter your task" 
            v-model="newTodoItem" 
            @keyup.enter="addTodoItem"
            >
        <button class="add__btn" @click="addTodoItem"><v-icon name="arrow-right"></v-icon></button>
    </div>
</template>
<script>
import getDate from "../components/common/getDate.js"

export default {    
    data(){
        return{
            newTodoItem: ""
        }
    },
    methods:{
        addTodoItem:function(){
            //값이 있을때만 실행
            if(this.newTodoItem !== ''){
                let value = {
                    item : this.newTodoItem,
                    data: `${getDate().date}/${getDate().week}`,
                    tiem:getDate().time,
                }
                localStorage.setItem(this.newTodoItem,value);
                // localStorage.setItem(this.newTodoItem,JSON.stringify(value));
                //실행 후 input은 리셋
                this.clearInput()
            }       
            
        },
        clearInput:function(){
            this.newTodoItem = ''
        },
        
    }
}
</script>
<style>
.add{
    margin:2rem 0 1rem;
     position: relative;    
}
.add__input{
    border-radius: 50px;
    width:100%;
    background: rgba(255,255,255,0.5);
    height: 50px;
    padding:5px 1.5rem;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
    color:#fff;
   
}
.add__input::placeholder{
    color:#fff
}
.add__btn{
    border-radius: 50%;
    width:40px;
    height:40px;
    background-color:#fff;
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    right:5px;
    color:#636363;
    padding:0.5rem;
}
</style>