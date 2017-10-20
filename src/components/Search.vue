<template>
    <div class="search">
        <input type="text" name="searchTxt" id="Search" v-model="query" @keypress.enter="handleSearch">
        <button @click="handleSearch">Search</button>
    </div>
</template>
<script>
export default {
  data(){
      return{
          query:''
      }
  },
  methods: {
      handleSearch(){
          this.$emit('SearchRequested',this.query);
      }
  }
}
</script>
<style scoped>
.search input{
    padding: 10px;
    border:1px solid #ccc;
    border-radius: 5px;
    width: 400px;
    outline: none;
}
.search button{
    padding: 10px;
    background-color: #ccc;
    border:1px solid #ccc;
    cursor: pointer;
    border-radius: 5px;
    transition: all .5s ease;
}
.search button:hover{
    background-color: #564444;
    color:#fff;
}
</style>
