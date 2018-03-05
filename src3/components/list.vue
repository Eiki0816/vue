<template>
	<!--  -->
<div id="list">
	<p>评论回复：</p>
	<p v-show="comments.length==0"> 暂无评论，点击左侧添加评论</p>
	<ul class="list-group" >
		<item v-for="(comment,index) in comments" :comment='comment' :key="index" :deleteComment="deleteComment" :index="index"></item>
	</ul>
</div>


</template>

<script>
 import item from "./item"
export default {
  //申明接受属性
  props:['comments',"deleteComment"], //comments 会成为组件对象的属性
  components:{
  	item
  }
}
</script>

<style>

</style>