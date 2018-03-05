<template>
  <div>
    <h2>home 组件</h2>
    <div>
    	<ul>
    		<li>
    			<router-link to='/home/news'>News</router-link>
    		</li>
    		<li>
    			<router-link to='/home/mag'>Mag</router-link>
    		</li>
    	</ul>
    	<router-view></router-view>
    </div>
  </div>


</template>

<script>
 
export default {
	
}
</script>

<style>
   
</style>