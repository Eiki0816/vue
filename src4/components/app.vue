<template>
  <div>
    <add :setSearchName="setSearchName"></add>
    <list :searchName="searchName"></list>
  </div>


</template>

<script>
  import add from "./add"
  import list from "./list"
export default {
    components:{
      add,list
    },
    data(){
      return {
        searchName:""
      }
    },
    methods:{
      setSearchName (searchName){
        this.searchName =searchName
      }
    }

}
</script>

<style>

</style>