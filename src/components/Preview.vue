<template>
  <div>
      <ul>
          <li v-for="gif in gifs" :key="gif.id">
              <img :src="gif.images.fixed_height.url" alt="">
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props:['gifs']
}
</script>

<style scoped>
    ul{
        list-style: none;
    }
    ul li{
        display: inline-block;
        margin: 15px;
    }
</style>


