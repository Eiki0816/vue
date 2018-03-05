<template>
  <div>
    <ul>
    	<li v-for="news in newsArr">{{news}}</li>
    </ul>
  </div>


</template>

<script>
 
export default {
	data () {
		return {
			newsArr:["newsArr1","newsArr2","newsArr3"]
		}
	}
}
</script>

<style>
  
</style>