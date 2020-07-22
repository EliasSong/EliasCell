<template>
  <div class="detail">
    <div class="jumbotron jumbotron-fluid homejubotron text-white">
      <div class="container">
        <h1 class="display-4">{{blogData.blogTitle}}</h1>
        <hr class="my-4">
        <p class="lead">{{blogData.blogDesc}}</p>
        <cite>{{blogData.blogTime}}</cite>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8  col-md-8  col-sm-12 col-xs-12">
          <div class="card content">
            <h5 class="card-header"><i class="fa fa-file"></i></h5>
<!--            <div class="card-body" v-html="blogData.blogHTMLContent">{{blogData.blogHTMLContent}}</div>-->
            <div class="card-body">
              <VueMarkdown :source="blogData.blogMDContent"></VueMarkdown>
            </div>
          </div>
        </div>
        <div class="col-lg-4  col-md-4  col-sm-12 col-xs-12 ">
          <BlogDetailBlogRecommend :recommended-blog-data="recommendedBlogData"></BlogDetailBlogRecommend>
        </div>
      </div>
    </div>

    <BlogDetailCopyright></BlogDetailCopyright>

  </div>
</template>

<script>
  import "mavon-editor/dist/css/index.css";
  import {getBlogDetail,getBlogRecommend} from "../../network/blog";
  import $ from "jquery"
  import BlogDetailCopyright from "../../components/copyright";
  import BlogDetailBlogRecommend from "./ChildrenComponents/BlogDetailBlogRecommend";
  import VueMarkdown from "vue-markdown"
  export default {

    name: "BlogDetailPage",
    data(){
      return {
        id:0,
        blogData: {},
        recommendedBlogData: []
      }
    },
    methods: {
      getDetailPageData(){
        this.id = this.$route.params.blogId;
        getBlogDetail(this.id).then(res => {
          this.blogData = res;
          document.querySelector(".homejubotron").style.backgroundImage = "url("+this.blogData.blogCarousel+")"
          getBlogRecommend(this.blogData.blogTag).then(res => {
            let idx = res.findIndex(blog => {
              return blog._id === this.blogData._id
            })
            res.splice(idx,1)
            this.recommendedBlogData = res.slice(0,5)
          })

        });

      }

    },
    watch:{
      '$route'(to, from) {
        this.getDetailPageData()
        $("body,html").animate({scrollTop:0},10);
      }
    },

    created() {
      this.getDetailPageData()
    },
    updated() {

    },
    components:{
      BlogDetailCopyright,
      BlogDetailBlogRecommend,
      VueMarkdown
    },
  }
</script>

<style scoped>
  .detail{
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
  .card{
    background-color: rgb(28,28,28);
  }
  .content{
    max-width: 750px;
  }
  .btn{
    float: right;
  }
</style>