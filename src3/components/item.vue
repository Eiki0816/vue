<template>
<li class="list-group-item">
	<p>{{comment.name}}</p>
	<p>{{comment.conent}}</p>
	<button @click="removeItem()">删除</button>
</li>

</template>

<script>
 
export default {
    props:{
    	comment:Object,
    	deleteComment:Function,
    	index:Number
    },
    methods:{
    	removeItem (){
    		const {comment,deleteComment,index}=this
    		if (confirm(`确定删除${comment.name}评论么？`)) {
               deleteComment(index)
    		}
    	}
    }

}
</script>

<style>

</style>