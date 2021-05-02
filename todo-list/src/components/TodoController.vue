<template>
    <div class="controller">
        <div class="select">
            <label for="order">order</label>
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

</style>