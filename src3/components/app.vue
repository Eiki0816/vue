<template>
  <div>
     <h4>对Vue的看法</h4>
     <add :addComment="addComment"></add>
     <list :comments="comments" :deleteComment="deleteComment"></list>
  </div>


</template>

<script>
 import add from "./add.vue"
 import list from "./list.vue"
export default {

	data (){
		return {
			comments:[
				{name:"jon",conent:"VUE还不错"},
				{name:"july",conent:"VUE真不错"}
			]
		}

	},
	methods:{
		addComment (comment){
            this.comments.unshift(comment)
		},
		deleteComment (index){
            this.comments.splice(index,1)
		}
	},
	components:{
		add,list
	}
}
</script>

<style>

</style>