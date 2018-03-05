<template>
	<!--  -->
<div>
	<input type="checkbox" name="" v-model="isAllComplete">
	<span>已完成{{completeSize}}/全部{{todos.length}}</span>
	<button v-show="completeSize" @click="cleraComplete">清除已完成任务</button>
</div>


</template>

<script>

export default {
   props:["todos","cleraComplete","selectAll"],
   
   computed:{
         
        completeSize(){
        	return this.todos.reduce((preTotal,todo) => {
                     return preTotal + (todo.complete ? 1:0)
                },0)
        },

        isAllComplete:{
        	get (){
        		//命令式编程

        		// let sum = 0;
        		// for (var i = 0;i<this.todos.length; i++) {
        		// 	var todo =this.todos[i];
        		// 	sum = sum+(!todo.complete? 1 :0)
        		// 	return sum
        		// }
        		// return sum 
        		//申明式编程
        		//根据数组统计为完成的数量
                // const unCompleteSize = this.todos.reduce((preTotal,todo) => {
                //      return preTotal + (!todo.complete ? 1:0)
                // },0)
               return this.completeSize ===this.todos.length &&this.todos.length>0
        	},
        	set (value){
        		this.selectAll(value)
        	}
        }
   }
}
</script>

<style>

</style>