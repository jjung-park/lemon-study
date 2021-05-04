<template>
    <div>
        <ul class="list">
            <li class="list__item">
                <div class="check_area">
                    <input type="checkbox" id="list-item-1">
                    <label for="list-item-1">
                        <p class="list__text">study speach</p>
                    </label>
                </div>
                <div class="right_area">
                    <button class="list__delete" @click.prevent="removeItem()"><v-icon name="x"></v-icon></button>
                    <p class="list__date">5/4</p>
                </div>
                
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    data(){
        return{

        }
    },
    methods:{
        removeItem:function () {
            console.log('remove')
        }
    }
}
</script>
<style>
.list__item{
    margin-top:1rem;
    padding:0.5rem 1rem;
    background:#fff;
    display: flex;
    justify-content: space-between;
    align-content: center;;
}
.check_area{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.check_area input[type=checkbox]{
    margin-right:0.5rem;
}
.list__delete{
   width: 24px;
   padding:0 0.3rem;
   color:#bbb;

}
.list__date{
    font-size: 14px;
    color:#b0b0b0;
}

</style>