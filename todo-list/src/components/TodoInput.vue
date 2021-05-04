<template>
    <div class="add">
        <input type="text" class="add__input" placeholder="enter your task" v-model="newTodoItem" v-on:keyup.enter="addTodoItem">
        <button class="add__btn">add</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            newTodoItem: ""
        }
    },
    methods:{
        addTodoItem:function(){
            if(this.newTodoItem !== ''){
                var value = {
                    item: this.newTodoItem,
                    date: `${new Date().getMonth() + 1}/${new Date().getDate()}`,
                    completed: false
                };
                localStorage.setItem(this.newTodoItem, JSON.stringify(value));
                this.clearInput();
            }
            
        },
        clearInput() {
            this.newTodoItem = "";
        }
    }
}
</script>
<style>
.add{
    margin:2rem 0;
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
    right:0;
    top:50%;
    transform: translateY(-50%);
    right:5px
}
</style>