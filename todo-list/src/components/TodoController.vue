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
        <button class="clear">clear all</button>
    </div>
</template>
<script>
export default {
    data(){
        return{

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