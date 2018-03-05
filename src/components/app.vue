<template>
  <div>
     <add></add>
     <list></list>
     <todos-footer></todos-footer>
  </div>

</template>

<script>
  import add from "./add"
  import list from "./list"
  import footer from "./footer"
export default {
    components:{
      add,
      list,
      "todos-footer":footer
    },
    mounted(){
       //this.todos = store.readTodos()
        this.$store.dispatch('readTodos')
    }

}
</script>

<style>

</style>