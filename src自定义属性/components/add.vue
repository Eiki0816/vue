<template>
  <div>
    <input type="text" name="" placeholder="输入任务名称，按回车确认" v-model="inputTodo" @keyup.enter="addTodoinput">
  </div>


</template>

<script>
 
export default {
	// props:["addTodo"],
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
        this.$emit('addTodo',todo)
    		//this.addTodo(todo);
    	  this.inputTodo=""
    	}
    }

}
</script>

<style>

</style>