<template>
  <div class="albumpage">
    <h1>woshialbum</h1>
    <waterfall class="list" :col="2"
               :data="test" @loadmore="loadmore">
      <template>
        <div v-for="(item, index) in test" :key="index">
          <img :src="item" alt="..." class="img-thumbnail">
        </div>
      </template>
    </waterfall>
  </div>
</template>

<script>
  export default {
    name: "AlbumDetailPage",
    data(){
      return{
        test:["https://eliassong-1301617095.cos.ap-shanghai.myqcloud.com/Blog/album/testalbum/131458279781835852.jpg","https://eliassong-1301617095.cos.ap-shanghai.myqcloud.com/Blog/album/testalbum/131458279781835852.jpg"
          ,"https://eliassong-1301617095.cos.ap-shanghai.myqcloud.com/Blog/album/testalbum/131458279781835852.jpg",
          "https://eliassong-1301617095.cos.ap-shanghai.myqcloud.com/Blog/album/testalbum/131458279781835852.jpg",
          "https://eliassong-1301617095.cos.ap-shanghai.myqcloud.com/Blog/album/testalbum/131458279781835852.jpg",
          "https://eliassong-1301617095.cos.ap-shanghai.myqcloud.com/Blog/album/testalbum/692954128313604911.jpg",
          "https://eliassong-1301617095.cos.ap-shanghai.myqcloud.com/Blog/album/testalbum/692954128313604911.jpg",
          "https://eliassong-1301617095.cos.ap-shanghai.myqcloud.com/Blog/album/testalbum/759454283621323623.png",
          "https://eliassong-1301617095.cos.ap-shanghai.myqcloud.com/Blog/album/testalbum/759454283621323623.png",

        ]
      }
    }
  }
</script>

<style scoped>

</style>