<template>
	<!--  -->
<div>
	<h2 v-show="firstview">enter name search</h2>
	<h2 v-show="loading">Loading</h2>
	<h2 v-show="errorMsg">{{errorMsg}}</h2>
	<ul  v-show="users">
       <li v-for="(user,index) in users" :key="index">
           <a :href="user.url"><img :src="user.avatar_url"></a>
           <p>{{user.name}}</p>
       </li>
    </ul>
    </div>
</div>


</template>

<script>
import axios from "axios"
export default {
   	props:{
   		searchName:String
   	},
  	data(){
	  	return{
	  		firstview:true,
	  		loading:false,
	  		errorMsg:null,
	  		users:null
	  	}
    },
    watch:{
    	searchName(value){
    		console.log("searchName()",value)
    		//准备发请求前===将状态更新为正在请求中
    		this.firstview=false,
    		this.loading=true,
            this.errorMsg=null,
            this.users=null
    		//发请求
    		const url =`https://api.github.com/search/search/users?q=${value}`
    		axios.get(url)
    		     .then(response=>{
                      
                      const users=response.data.items.map(item=> {
                      		return {
                            	url:item.html_url,
                            	name:item.login,
                            	avatar_url:item.avatar_url
                            }
                        })
                    //将状态更新为请求成功
                    this.loading=false
                    this.users=users
                 })
    			 .catch(error=>{
                      this.loading=false
                      this.errorMsg="请求失败"
    			 })
    	}
    }

}
</script>

<style>

</style>