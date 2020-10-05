<template>
  <div class="imagecreate">
    <div class="container main">
      <div class="form">
        <div class="container c-form">
          <div class="form-group">
            <label for="images">ImageURLs</label>
            <div id="images">
              <textarea class="form-control"  rows="5" v-model="urls"></textarea>
            </div>
          </div>
          <div @click="NewImages" class="btn btn-primary">Submit</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {addNewImagesToAlbum} from "../../network/album";

  export default {
    name: "ImageCreatePage",
    data() {
      return {
        count: 2,
        urls:""

      }
    },
    methods: {
      NewImages() {
        var newImageURLs=this.urls.split("\n")
        var albumId=this.$route.params.albumId
        var postData={
          newImageURLs:[],
          albumId:"",
        }
        postData.newImageURLs = newImageURLs;
        postData.albumId = albumId;
        console.log(postData);
        addNewImagesToAlbum(postData).then(res => {
          console.log(res);
        })
      }
    },
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