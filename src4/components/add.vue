<template>
  <div>
     Search Github Users <br>
     <input type="text" name="" placeholder="enter the name you search" v-model="searchName">
     <button @click="search">Search</button>
  </div>


</template>

<script>
 
export default {
	props:{
		setSearchName:Function
	},
    data (){
  	   return {
  	   	searchName:""
  	   }  
    },

	methods:{
	    search(){
	     	const searchName=this.searchName.trim();
	     	if (searchName) {
	     		this.setSearchName(searchName)
	     	}
	     	this.searchName=""
	    }

    }


}
</script>

<style>

</style>