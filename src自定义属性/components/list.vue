<template>

<div>
 <item v-for="(todo,index) in todos" :key="index" :todo="todo" :index="index"></item>
	
</div>


</template>

<script>
  import item from "./item"
export default {
    props:{
    	todos:Array,
    	index:Number
    },
    components:{
    	item
    }
}
</script>

<style>

</style>