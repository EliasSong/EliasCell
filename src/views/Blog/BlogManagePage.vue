<template>
  <div class="manage">
    <div class="container">
      <div class="card">
        <div class="card-body">
          {{blogData}}
        </div>
      </div>

      <mavonEditor
              @save="saveDoc"
              @change="updateDoc"
              ref="editor"
              v-model="editorDoc">
      </mavonEditor>
    </div>

  </div>
</template>

<script>
  import { mavonEditor } from "mavon-editor";
  import "mavon-editor/dist/css/index.css";
  import {getBlogDetail} from "../../network/blog";
  export default {
    name: "BlogManagePage",
    data(){
      return {
        blogData:{},
        id:0,
        editorDoc:""
      }
    },
    created() {
      this.id = this.$route.params.blogId;
      getBlogDetail(this.id).then(res => {
        this.blogData = res;
        this.$refs.editor.d_value = this.blogData.blogContent
      })

    },
    methods:{
      saveDoc(markdown, html) {
        // 此时会自动将 markdown 和 html 传递到这个方法中
        console.log("save");
      },
      updateDoc(markdown, html) {
        // 此时会自动将 markdown 和 html 传递到这个方法中
        console.log("update");
      },
    },
    components:{
      mavonEditor
    }


  }
</script>

<style scoped>
  .manage{
    color: #eeeeee;
  }
  .container{
    margin-top: 80px;
  }
  .card{
    background-color: rgb(28,28,28);
  }
</style>