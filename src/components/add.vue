<template>
  <div>
    <input type="text" name="" placeholder="输入任务名称，按回车确认" v-model="inputTodo" @keyup.enter="addTodoinput">
  </div>


</template>

<script>
 
export default {
	data () {
		return {
			inputTodo:''
		}
	},
	methods:{
		addTodoinput (){
			const inputTodo = this.inputTodo.trim();
			if(!inputTodo){
               return
			}
			//根据输入的对象封装todo对象
			const  todo={
				title:inputTodo,
				complete:false
			}
			//发送消息 触发事件
			//this.addTodo(todo)
			this.$store.dispatch("addTodo",todo)
			this.inputTodo=''
		}
	}


}
</script>

<style>

</style>