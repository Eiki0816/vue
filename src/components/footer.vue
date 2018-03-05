<template>
	<!--  -->
<div>
	<input type="checkbox" name="" v-model="isAllComplete">
	<span>已完成{{completeSize}}/全部{{totleSize}}</span>
	<button v-show="completeSize" @click="cleraComplete">清除已完成任务</button>
</div>


</template>

<script>
import { mapGetters,mapActions} from 'vuex'
export default {
   methods:mapActions(['cleraComplete']),
   computed:{
        isAllComplete:{
        	get (){
        		return this.$store.getters.isAllComplete
        	},
        	set (value){
        		this.$store.dispatch('selectAll',value)
        	}
        },
        ...mapGetters(['completeSize','totleSize'])
   }
}
</script>

<style>

</style>