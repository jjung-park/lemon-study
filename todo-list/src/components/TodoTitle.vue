<template>
    <div class="title">
        <p class="title_message">{{message}}</p>
        <p class="title_task">
            you've got
            <span class="title_task_total">{{taskTotal}}</span> task today
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

</style>