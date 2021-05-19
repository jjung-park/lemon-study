<template>
    <header>
        <h1 class="logo">jjung todo</h1>
        <p class="date">{{timestamp}}</p>
    </header>
</template>
<script>
import getDate from "../components/common/getDate.js"
export default {
    data(){
        return{
            timestamp:'',
        }
    },
    created(){
        
        this.timestamp = `${getDate().month}/${getDate().date} ${getDate().week}`
    }
}
</script>
<style lang="scss">

</style>