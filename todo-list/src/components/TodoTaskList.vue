<template>
    <div>
        <ul class="list">
            <li class="list__item" v-for="(listItem, index) in propsData" :key="listItem.item">
                <div class="check_area">
                    <input 
                        type="checkbox" 
                        :id="listItem.item"
                        :checked="listItem.completed == true"
                        @change="toggleComplete(listItem)"
                    />
                    <label :for="listItem.item">
                        <p class="list__text">{{listItem.item}}</p>
                    </label>
                    <p class="list__date">{{listItem.date}}</p>
                </div>
                <div class="right_area">
                    <button class="list__delete" @click="removeItem(listItem, index)"><v-icon name="x"></v-icon></button>
                    <p class="list__date">{{timestamp}}</p>
                </div>
                
            </li>
        </ul>
    </div>
</template>
<script>
import getDate from "../components/common/getDate.js"

export default {
    props:["propsData"],
    data(){
        return{
            timestamp:'',
        }
    },
    created(){
        
        this.timestamp = `${getDate().month}/${getDate().date}`
    },
    methods:{
        toggleComplete:function(listItem){
            this.$emit("toggleItem", listItem)
        },
        removeItem:function(listItem, index){
            this.$emit("removeItem", listItem, index)
            
        },
      
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
.right_area{
    text-align:right
}

</style>