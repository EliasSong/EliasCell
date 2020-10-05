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
            <h5 class="card-header"><i class="fas fa-pen-alt"></i></h5>
<!--            <div class="card-body" v-html="blogData.blogHTMLContent">{{blogData.blogHTMLContent}}</div>-->
            <div class="card-body">
              <mavon-editor codeStyle="monokai" class="card-body-content" v-html="blogData.blogHTMLContent"></mavon-editor>
<!--              <VueMarkdown :source="blogData.blogMDContent"></VueMarkdown>-->
            </div>
          </div>
        </div>
        <div class="col-lg-4  col-md-4  col-sm-12 col-xs-12 ">
          <BlogDetailOperatePart :pre-blog-data="preBlogData" :next-blog-data="nextBlogData"></BlogDetailOperatePart>
          <BlogDetailBlogRecommend :recommended-blog-data="recommendedBlogData"></BlogDetailBlogRecommend>
        </div>
      </div>
    </div>
<!--    <backButton class="backBtn"></backButton>-->
    <BlogDetailCopyright></BlogDetailCopyright>


  </div>
</template>

<script>
  import "mavon-editor/dist/css/index.css";
  import { mavonEditor } from "mavon-editor";
  import {getBlogDetail,getBlogRecommend,getAllBlog} from "../../network/blog";
  import $ from "jquery"
  import BlogDetailCopyright from "../../components/copyright";
  import BlogDetailBlogRecommend from "./ChildrenComponents/BlogDetailBlogRecommend";
  import BlogDetailOperatePart from "./ChildrenComponents/BlogDetailOperatePart";
  // import backButton from "../../components/back";
  export default {

    name: "BlogDetailPage",
    data(){
      return {
        id:0,
        blogData: {},
        recommendedBlogData: [],
        preBlogData:{},
        nextBlogData:{}
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
            this.recommendedBlogData = res

          })
          getAllBlog().then(res => {
            let idx = res.findIndex(blog => {
              return blog._id === this.blogData._id
            })
            if(idx>0&&idx<res.length-1){
              this.preBlogData = res[idx-1]
              this.nextBlogData = res[idx+1]
            }
            else if(idx<=0){
              this.preBlogData = {
                _id:-1,
                blogTitle:"无"
              }
              this.nextBlogData = res[idx+1]
            }
            else{
              this.preBlogData = res[idx-1]
              this.nextBlogData = {
                _id:-1,
                blogTitle:"无"
              }
            }
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
      BlogDetailOperatePart,
      mavonEditor
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
    background-color: rgb(36,36,36);
    max-width: 750px;
    margin-bottom: 15px;
  }
  .card-body{
    padding: 0;
  }
  .card-body-content{
    background-color: rgb(36,36,36);
    color: #eeeeee;
    padding: 30px 20px;
    z-index: 0;
  }

  .btn{
    float: right;
  }
  .backBtn{
    position: fixed;
    left: 50px;
    bottom: 50px;
  }
</style>