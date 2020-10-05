<template>
  <div class="modify">
    <div class="container main">
      <div class="form">
        <div class="container c-form">
          <div class="form-group">
            <label for="blogtitle">Title</label>
            <input type="text" class="form-control" id="blogtitle" v-model="modifyBlogTitle">
          </div>
          <div class="form-group">
            <label for="blogdesc">Desc</label>
            <input type="text" class="form-control" id="blogdesc" v-model="modifyBlogDesc">
          </div>
          <div class="form-group">
            <label for="blogtag">Tag</label>
            <input type="text" class="form-control" id="blogtag" v-model="modifyBlogTag">
          </div>
          <div class="form-group">
            <label for="url">URL</label>
            <input type="text" class="form-control" id="url" v-model="modifyBlogCarousel">
          </div>
          <div class="form-group">
            <label for="editor">Content</label>
            <mavonEditor
              @save="saveDoc"
              @change="updateDoc"
              id="editor"
              v-model="modifyBlogMDContent"
             >
            </mavonEditor>
          </div>
          <div @click="submittUpdate" class="btn btn-primary">Submit</div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
  import {getBlogDetail,modifyBlog} from "../../network/blog";
  import { mavonEditor } from "mavon-editor";
  import "mavon-editor/dist/css/index.css";
  export default {
    name: "BlogModifyPage",
    data(){
      return{
        id:-1,
        test:"hello",
        blogData:{},
        editorDoc:"",
        modifyBlogTitle:"",
        modifyBlogDesc:"",
        modifyBlogHTMLContent:"",
        modifyBlogTag:"",
        modifyBlogCarousel:"",
        modifyBlogMDContent:"",
      }
    },
    methods:{
      saveDoc(markdown, html) {
        this.modifyBlogHTMLContent = html
        this.modifyBlogMDContent = markdown
        this.submittUpdate()
      },
      updateDoc(markdown, html) {
        this.modifyBlogHTMLContent = html
        this.modifyBlogMDContent = markdown
      },
      submittUpdate(){
        this.blogData.blogTitle=this.modifyBlogTitle
        this.blogData.blogDesc=this.modifyBlogDesc
        this.blogData.blogCarousel=this.modifyBlogCarousel
        this.blogData.blogTag=this.modifyBlogTag
        this.blogData.blogHTMLContent=this.modifyBlogHTMLContent
        this.blogData.blogMDContent=this.modifyBlogMDContent
        modifyBlog(this.id,this.blogData).then(res=>{
          console.log(res);
        })
      }

    },
    components:{
      mavonEditor
    },
    created() {
      this.id=this.$route.params.id;
      getBlogDetail(this.id).then(res=>{
        console.log(res);
        this.blogData=res;
        this.modifyBlogTitle=this.blogData.blogTitle;
          this.modifyBlogDesc=this.blogData.blogDesc;
          this.modifyBlogHTMLContent=this.blogData.blogHTMLContent;
          this.modifyBlogTag=this.blogData.blogTag;
          this.modifyBlogCarousel=this.blogData.blogCarousel;
          this.modifyBlogMDContent=this.blogData.blogMDContent;
      })
    }

  }
</script>

<style scoped>
  .main{
    max-width: 750px;
    margin: 100px auto;
  }
  .form{
    background-color: rgb(36,36,36);
    border-radius: 5px;
    color: #eeeeee;

  }
  .c-form{
    padding: 30px;
  }
</style>