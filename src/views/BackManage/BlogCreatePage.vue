<template>
  <div class="createBlog">
    <div class="container main">


    <div class="form">
      <div class="container c-form">
        <div class="form-group">
          <label for="blogtitle">Title</label>
          <input type="text" class="form-control" id="blogtitle" v-model="newBlogTitle">
        </div>
        <div class="form-group">
          <label for="blogdesc">Desc</label>
          <input type="text" class="form-control" id="blogdesc" v-model="newBlogDesc">
        </div>
        <div class="form-group">
          <label for="blogtag">Tag</label>
          <input type="text" class="form-control" id="blogtag" v-model="newBlogTag">
        </div>
        <div class="form-group">
          <label for="url">URL</label>
          <input type="text" class="form-control" id="url" v-model="newBlogURL">
        </div>
        <div class="form-group">
          <label for="editor">Content</label>
          <mavonEditor
                  @save="saveDoc"
                  @change="updateDoc"
                  ref="createeditor"
                  id="editor"
                  v-model="editorDoc">
          </mavonEditor>
        </div>

        <div @click="NewBlog" class="btn btn-primary">Submit</div>
      </div>

    </div>

    </div>
  </div>



</template>

<script>
  import {createNewBlog} from "../../network/blog";
  import { mavonEditor } from "mavon-editor";
  import "mavon-editor/dist/css/index.css";

  export default {
    name: "BlogCreatePage",
    data(){
      return {
        editorDoc:"",
        newBlogTitle:"",
        newBlogDesc:"",
        newBlogHTMLContent:"",
        newBlogTag:"",
        newBlogURL:"",
        newBlogMDContent:"",
      }
    },
    components:{
      mavonEditor
    },
    methods:{
      NewBlog(){
        const newBlogTitle = this.newBlogTitle
        const newBlogDesc = this.newBlogDesc
        const newBlogTag = this.newBlogTag
        const newBlogURL = this.newBlogURL
        const newBlogMDContent = this.newBlogMDContent
        const newBlogHTMLContent = this.newBlogHTMLContent

        let newBlogData={
          newBlogTitle,
          newBlogDesc,
          newBlogTag,
          newBlogURL,
          newBlogMDContent,
          newBlogHTMLContent
        }
        createNewBlog(newBlogData).then(res => {
          console.log(res);
        })
      },
      saveDoc(markdown, html) {
        // 此时会自动将 markdown 和 html 传递到这个方法中
        this.newBlogHTMLContent = html
        this.newBlogMDContent = markdown
      },
      updateDoc(markdown, html) {
        // 此时会自动将 markdown 和 html 传递到这个方法中
        this.newBlogHTMLContent = html
        this.newBlogMDContent = markdown
      },
    }
  }
</script>

<style scoped>
  .main{
    max-width: 750px;
    margin: 100px auto;
  }
  .form{
    background-color: rgb(28,28,28);
    border-radius: 5px;
    color: #eeeeee;

  }
  .c-form{
   padding: 30px;
  }

</style>