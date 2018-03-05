<template>
	<!--  -->
<div :style={background:bgColor} @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
	 <input type="checkbox" name="" v-model="todo.complete">
     <span>{{todo.title}}</span>
     <button v-show="isShow" @click="removeItem">删除</button>
</div>
</template>

<script>

export default {
   props:{
    todo:Object,
    deleteTodo:Function,
    index:Number
   },
   data (){
     return {
        bgColor:"#fff",
        isShow:false
     }
   },
   methods:{
     handleEnter(isEnter){
         if (isEnter) {
            this.bgColor="#ccc",
            this.isShow=true
         }else{
            this.bgColor="#fff",
            this.isShow=false
         }
     },
     removeItem (){
        this.deleteTodo(this.index)
     }

   }


}
</script>

<style>

</style>