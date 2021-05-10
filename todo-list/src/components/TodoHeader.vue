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
        // const now = new Date();
        // const month = now.getMonth() + 1;
        // const date = now.getDate();
        // const weekList = new Array("sun","mon","tue","wed","thu","fri","sat");
        // const week = weekList[now.getDay()];
        // this.timestamp = `${month}/${date} ${week}`;
        // getDate.js를 추가하면서 위 소스 제거
        this.timestamp = `${getDate().month}/${getDate().date} ${getDate().week}`
    }
}
</script>
<style lang="scss">

</style>