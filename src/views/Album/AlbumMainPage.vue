<template>
  <div class="albumdetail">
      <div class="container">
        <waterfall class="list" :col="2"
                   :data="test" @loadmore="loadmore">
          <template>
            <div v-for="(item, index) in test" :key="index">
              <img :src="item" alt="..." class="img-thumbnail">
            </div>
          </template>
        </waterfall>
      </div>



  </div>
</template>

<script>

  import {getAllAlbum} from "../../network/album";
  export default {
    name: "AlbumMainPage",
    data(){
      return{
        allAlbumData:[],
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
    },
    components:{

    },
    mounted() {
    },
    created() {
      getAllAlbum().then(res => {
        this.allAlbumData = res[0].albumImage
        console.log(this.allAlbumData);


      })
    },
    methods:{
      loadmore(){
        console.log("more");
      }
    }
  }
</script>

<style scoped>
  .list::-webkit-scrollbar{
    display: none
  }
</style>