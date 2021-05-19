<template>
    <div class="controller">
        <div class="select">
            <select name="order" id="order" class="selectbox">
                <option value="data-acs">date ascending</option>
                <option value="data-decs">date decscending</option>
                <option value="name-acs">name ascending</option>
                <option value="name-decs">name decscending</option>
              
            </select>
        </div>
        <button class="clear" @click="clearAll()">clear all</button>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        clearAll:function () {
            this.$emit("clearAll")
        }
    }
}
</script>
<style>
.controller{
    display: flex;
    justify-content: space-between;
    align-items:center;
}
.select{
    position: relative;
}
.select::after{
    content:'▼';
    display: block;
    width:24px;
    height:24px;
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    right:0.5rem;
    text-align: center;
    color:#636363;
    font-size: 0.768rem;
    line-height: 24px;
}
.selectbox{
    border-radius: 3px;
    padding:0.5rem 1rem;
    border:1px solid #ddd;
    background:#fff;
    
}

.clear{
    color:#aaa;
}
</style>