<template>
    <div class="title">
        <p class="title__message">{{message}}</p>
        <p class="title__task">
            you've got
            <span class="title__task-total">{{taskTotal}}</span> task today
        </p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            message:'Hello, jjung',
            taskTotal:5
        }
    }
}
</script>
<style>
.title {
}
.title__message{
    margin:3rem 0
}
.title__task{
    font-size:2rem;
    font-weight: bold;

}
.title__task > span{
    font-size: 3rem;
    display: block;
    line-height: 4rem;
}
</style>