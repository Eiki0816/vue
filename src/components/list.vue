<template>

<div>
  <item v-for="(todo,index) in todos" :key="index" :todo="todo"  :index="index"></item>
	
</div>


</template>

<script>
import storageUtil from "../util/storageUtil"
import item from "./item"
import {mapGetters} from 'vuex'

export default {
  components:{
    item
  },
  computed:mapGetters(['todos']),

  watch:{
  	 todos:{
  	 	deep:true,//深度监视
  	 	handler: storageUtil.save
  	 }
  }
}
</script>

<style>

</style>