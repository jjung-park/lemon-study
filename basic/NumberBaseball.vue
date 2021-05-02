<template>
    <div>
        <h1>{{result}}</h1>
        <form v-on:submit="onSubmitForm">
            <input type="text" ref="answer" maxlength="4" v-model="value">
            <button>입력</button>
        </form>
        <div>
            시도: {{tries.length}}
        </div>
        <ul>
            <li v-for="item in tries">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            tries:[],
            result:'',
            value:'',
        }
    },
    methods:{
        onSubmitForm:function(e){
            e.preventDefault();
            this.tries.push(this.value);
            this.value = '';
            this.$refs.answer.focus();
        }
    }
}
</script>

<style>

</style>