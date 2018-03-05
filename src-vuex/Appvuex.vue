<template>
  <div id="app">
     <p>click:{{count}}times,count is {{oddOrEven}}</p>
     <button @click="increment">+</button>
     <button @click="decrement">-</button>
     <button @click="incrementIfOdd">increment if odd</button>
     <button @click="incrementIfAsync">increment if async</button>
  </div>


</template>

<script>
    export default{
      data (){
        return {
           count:0
        }
      },
      computed:{
        oddOrEven(){
          return  this.count%2===0 ? "偶数" : "奇数" 
        }
      },
      methods:{
         increment(){
           this.count++
         },
         decrement(){
           this.count--
         },
         incrementIfOdd(){
            if (this.count%2 ===1) {
              this.count++
            }
         },
         incrementIfAsync(){
           setTimeout(()=>{
             this.count++
           },1000)
         }
      }
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
.finished{
   color:red
}
</style>