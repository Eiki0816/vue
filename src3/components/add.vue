<template>
<div id="add">
	<p>用户名：</p>
	<input type="text" name="" v-model="name">
	<p>评论内容：</p>
	<textarea rows="3" cols="20" v-model="conent"> </textarea>
	<button @click="submit">评论提交</button>
</div>


</template>

<script>
 
export default {
	data(){
		return{
			name:"",
			conent:""
		}
	},
    props:{
	   	addComment:{
	   		type:Function,  //属性值类型
	   		require:true    //属性的必要性
	   	}
    },
    methods:{
    	submit(){
    		//检查输入数据
    		const name=this.name.trim();
    		const conent=this.conent.trim();
    		if (!name || !conent) {
    			return
    		}
    		//根据输入的数据封装成comment
    		const comment={name,conent}
    		//添加到comments
    	    this.addComment(comment)
    	    //清空输入
    	    this.name=""
    	    this.conent=""
    	}
    }
}
</script>

<style>

</style>