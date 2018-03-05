<template>
  <div>
     <add :addTodo="addTodo"></add>
     <list :todos="todos"  :deleteTodo="deleteTodo"></list>
     <todos-footer :selectAll="selectAll" :cleraComplete="cleraComplete" :todos="todos"></todos-footer>
  </div>

</template>

<script>
  import add from "./add"
  import list from "./list"
  import footer from "./footer"
export default {
    data () {
       return {
           todos:[
               {title:"早上要吃饭1",complete:false},
               {title:"早上要吃饭2",complete:true},
               {title:"早上要吃饭3",complete:false},
               {title:"早上要吃饭4",complete:false},
               {title:"早上要吃饭4",complete:false}


           ]  
       }
    },
    components:{
      add,
      list,
      "todos-footer":footer
    },
    methods:{
      addTodo (todo){
        this.todos.unshift(todo)
      },
      deleteTodo (index) {
         this.todos.splice(index,1)
       },

       //全选/全不选
      selectAll (isCheck) {
          this.todos.forEach(todo => {
            todo.complete=isCheck
          })
      },
      //清空complete 为true的
      cleraComplete () {
           this.todos=this.todos.filter(todo =>!todo.complete)
      }

    }


}
</script>

<style>

</style>