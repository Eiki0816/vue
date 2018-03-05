<template>
	<!--  -->
<div>
	<input type="checkbox" v-model="isSelectComplete">
	<span>已完成{{completeSize}}/全部{{todos.length}}</span>
	<button v-show="completeSize" @click="clearComplete">清除已完成任务</button>
</div>


</template>

<script>

export default {
    props:["todos","selectAll","clearComplete"],
    computed:{

     //判断 已完成的任务 有几个被选中  reduce 是数组 Array的方法
      completeSize (){
            return this.todos.reduce((preTotal,todo) =>{
                return preTotal+ (todo.complete? 1 :0)
            },0)
        },

    //更新todos里的todo.complete  是否被全选中  
    isSelectComplete : {
        get(){
           return this.completeSize ===  this.todos.length && this.todos.length >0
        },
        set( value ){
            this.selectAll(value)
        }

    }    

    }

}
</script>

<style>

</style>