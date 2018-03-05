<template>
  <div>
     <p v-if="!repoName">Loading.....</p>
     <p v-else> most star repo is <a :href="url">{{repoName}}</a></p>
  </div>


</template>

<script>
 
export default {

	data(){
		return {
			searchName:"vu",
			repoName:null,
			url:null
		}
	},
	mounted(){
		//使用vue-resource发送请求
		const url=`https://api.github.com/search/repositories?q=${this.searchName}&sort=starts`
		this.$http.get(url)
			.then(
                 response => {
                 	//获取数据 类似于 ajax中成功后的data
                   const result=response.body
                   const repo=result.items[0]
                   //更新data 数据
                   this.repoName=repo.name
                   this.utl=repo.html_url
                 },
                 response => {
                    console.log("请求失败")
                 },

			)
	}


}
</script>

<style>

</style>