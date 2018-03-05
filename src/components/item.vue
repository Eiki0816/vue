<template>
	<!--  -->
<div>
	<div @mouseenter="handEnter(true)" @mouseleave="handEnter(false)" :style="{background:bgColor}">
     <input type="checkbox" name="" v-model="todo.complete">
     <span>{{todo.title}}</span>
     <button style="display: none;" v-show="isShow" @click="removeItem">删除</button>
  </div>
</div>


</template>

<script>

export default {
    props:{
       todo:Object,
       index:Number
    },
     data () {
     	 return {
     	 	bgColor:"white",
     	 	isShow:false
     	 }
     },
    
    methods:{
       handEnter(isEnter) {
         if (isEnter) {
             this.bgColor="#ccc",
             this.isShow=true

         }else{
         	this.bgColor="white",
         	this.isShow=false
         }
       },
       removeItem (){
	       	// const {deleteTodo,index} = this
	        // deleteTodo(index)
            //这两种写法等同
	        //this.deleteTodo(this.index)
             this.$store.dispatch('deleteTodo',this.index)
       	}
    }


}
</script>

<style>

</style>