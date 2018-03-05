<template>
  <div>
    <input type="text" name="" placeholder="输入任务名称，按回车确认" v-model="inputTodo" @keyup.enter="addTodoinput">
  </div>


</template>

<script>
 
export default {
	data (){
      return {
      	inputTodo:''
	   }
	},
	   
    methods:{
    	addTodoinput (){
    		const inputTodo = this.inputTodo.trim();
    		if (!inputTodo) {
    			return
    		}
    		const todo ={
    			title:inputTodo,
    			complete:false
    		}
         this.$store.dispatch("addTodo",todo)
    		//this.addTodo(todo);
    	  this.inputTodo=""
    	}
    }

}
</script>

<style>

</style>