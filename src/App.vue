<template>
  <div id="app">
    <search v-on:SearchRequested="handleSearch"></search>
    <loader v-show="isLoading"></loader>
    <preview :gifs="gifs"></preview>
  </div>
</template>

<script>
import Search from './components/Search.vue';
import Preview from './components/Preview.vue';
import Loader from './components/Loader.vue';

export default {
  name:'app',
  components:{
    Search,
    Preview,
    Loader
  },
  data(){
    return{
      isLoading: true,
      gifs:[]
    }
  },
  methods:{
    handleSearch(query){
      this.gifs = [];
      this.isLoading = true;
      fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=9167e82afffc49989a25abfda9ec78d3`)
    .then((res)=>{return res.json()})
    .then((res)=>{
      this.gifs = res.data;
      this.isLoading = false;
      });
    }
  },
  created(){
    fetch('http://api.giphy.com/v1/gifs/trending?api_key=9167e82afffc49989a25abfda9ec78d3')
    .then((res)=>{return res.json()})
    .then((res)=>{
      this.gifs = res.data;
      this.isLoading = false;
      });
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
