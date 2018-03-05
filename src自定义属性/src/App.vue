<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <h2> {{msg}}</h2>
   <input type="text" v-model="newtips" v-on:keyup.enter="addNew">
   <ul>
       <li v-for="item in items"  v-bind:class="{finished:item.isFinished}" v-on:click="toggleFinish(item)"> {{item.label}}</li>
   </ul>
    <p>tell me :{{childWords}}</p>
     <component-a msgfromFather="you die" v-on:child-tell-me="listenToMyBoy"></component-a>
  </div>


</template>

<script>
import Store from '@/store' //从本地存储获取数据以及保存
import ComponentA from './components/componentA' 
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items:Store.fetch() || [],
      newtips:'',
      childWords:''
    }
  },
  components: { ComponentA },
  watch:{
     items:{
        handler:function(items){
            Store.save(items)
        },
        deep:true
     }
  },
  methods:{
     toggleFinish:function(item){
         item.isFinished =! item.isFinished
     },
     addNew:function(){
          this.items.push({
              label:this.newtips,
              isFinished:false            
          }),
          this.newtips=''
     },
     listenToMyBoy:function(msg){
        this.childWords = msg
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