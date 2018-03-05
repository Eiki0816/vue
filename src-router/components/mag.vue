<template>
  <div>
     <ul>
     	<li v-for="msg in massages">
     		<router-link :to="`/home/mag/message_detail/${msg.id}`">{{msg.content}}</router-link>
     	</li>
     </ul>
       <router-view></router-view>
  </div>
</template>

<script>
 
export default {
	data (){
		return{
			massages:[]
		}
	},
	mounted(){
		//请求发送ajax请求 ，异步获取
		setTimeout(() => {
			this.massages=[
                {id:1,content:"massages1" },
				{id:2,content:"massages2" },
				{id:3,content:"massages3" },
			]
		},1000)
	}
}
</script>

<style>
  
</style>