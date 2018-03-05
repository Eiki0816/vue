<template>
  <div class="hello">
   <h2> {{msg}}</h2>
   <h2>{{msg2}}</h2>


  </div>
</template>

<script>
 export default{
    data(){
      return {
        msg:"Hello World!",
        msg2:"Hello World!"
      }
    }
 }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
