<template>
  <div class="detail">
    <div class="jumbotron jumbotron-fluid homejubotron text-white"
         >
      <div class="container">
        <h1 class="display-4">{{blogData.blogTitle}}</h1>
        <hr class="my-4">
        <p class="lead">{{blogData.blogDesc}}</p>
      </div>
    </div>
    <div class="container">
      {{blogData.blogContent}}
    </div>

  </div>
</template>

<script>
  import {getBlogDetail} from "../../network/blog";

  export default {

    name: "BlogDetailPage",
    data(){
      return {
        id:0,
        blogData: {}
      }
    },
    methods:{



    },

    created() {
      this.id = this.$route.params.blogId;
      getBlogDetail(this.id).then(res => {
        this.blogData = res;
        document.querySelector(".homejubotron").style.backgroundImage = "url("+this.blogData.blogCarousel+")"
      })
  },
    components:{
    }
  }
</script>

<style scoped>
  .detail{
    margin-top: 68px;
    color: #eeeeee;
  }
  .homejubotron{

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .homejubotron hr{
    border-style: solid;
    height: 1px;
    background-color: #ffffff;
  }
</style>