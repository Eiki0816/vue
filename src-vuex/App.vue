<template>
  <div id="app">
     <p>click:{{count}}times,count is{{oddOrEven}} </p>
     <button @click="increment">+</button>
     <button @click="decrement">-</button>
     <button @click="incrementIfodd">increment if odd</button>
     <button @click="incrementIfAsync">increment if async</button>
  </div>


</template>

<script>
  import {mapGetters,mapActions} from "vuex"
    export default {
      mounted(){
        console.log(this.$store)
      },

      computed:mapGetters(["count","oddOrEven"]),
      methods:mapActions(["increment","decrement","incrementIfodd","incrementIfAsync"])
       // methods:{
       //  increment() {
       //  //触发vuex的actions 调用 
       //     this.$store.dispatch('increment')
       //  },
       //  decrement() {
       //     this.$store.dispatch('decrement')
       //  },
       //  incrementIfodd() {
       //     this.$store.dispatch('incrementIfodd')
       //  },
       //  incrementIfAsync() {
       //      this.$store.dispatch('incrementIfAsync')
       //   } 
       // }
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>