<template>
  <div class="hello">
   <h2> {{msg}}</h2>
   <h2> {{msgfromFather}}</h2>
   <button v-on:click="onClickme">Click</button>
  </div>
</template>

<script>
 export default{
    data (){
      return {
        msg:"Hello from component a",

        
      }
    },
    props:['msgfromFather'],
    methods:{
       onClickme:function(){
           console.log(this.msgfromFather);
           this.$emit('child-tell-me',this.msg)
       }
    }
 }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.finished{
   color:red
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
