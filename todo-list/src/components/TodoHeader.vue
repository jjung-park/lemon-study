<template>
    <header>
        <h1 class="logo">jjung todo</h1>
        <p class="date">{{timestamp}}</p>
    </header>
</template>
<script>
export default {
    data(){
        return{
            timestamp:'',
        }
    },
    created(){
        const now = new Date();
        const month = now.getMonth() + 1;
        const date = now.getDate();
        const weekList = new Array("sun","mon","tue","wed","thu","fri","sat");
        const week = weekList[now.getDay()];
        this.timestamp = `${month}/${date} ${week}`;
    }
}
</script>
<style lang="scss">
</style>