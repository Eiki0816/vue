<template>
  <div>
      <add :addTodo="addTodo"></add>
      <list :todos="todos" :deleteTodo="deleteTodo"></list>
      <todo-footer :selectAll="selectAll" :clearComplete="clearComplete" :todos="todos"></todo-footer>
  </div>

</template>

<script>
  
  import add from './add'
  import list from './list'
  import footer from './footer'
  import store from '../until/store'
export default {
  data () {
    return {
      todos:[]
    }
  },
  mounted(){
    //从local 存储中读取保存的todos

    console.log(this.todos)
     this.todos=store.fetch();
  },
   watch:{
    todos:{
      deep:true, 
      handler:function(value){
        store.save()
      }
    } 
  },
  methods:{
    addTodo (todo) {
        this.todos.unshift(todo)
    },

    deleteTodo (index) {
      this.todos.splice(index,1)
    },

    //全选 或者全不选的判断   看todos 里的todo 是否被选中 
    selectAll (isCheck){
      this.todos.forEach(todo => {
        todo.complete=isCheck
      })
    },
     //更新 todos 列表里 被选中的清除  也就是属性为checkbox = true 的清除
    clearComplete(){
      this.todos= this.todos.filter(todo => !todo.complete)
    }

  },
  
  components:{
    add,
    list,
    "todo-footer":footer
  }

}
</script>

<style>

</style>