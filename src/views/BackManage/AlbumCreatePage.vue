<template>
  <div class="albumcreate">
    <div class="container main">
      <div class="form">
        <div class="container c-form">
          <div class="form-group">
            <label for="albumtitle">Title</label>
            <input type="text" class="form-control" id="albumtitle" v-model="newAlbumTitle">
          </div>
          <div @click="NewAlbum" class="btn btn-primary">Submit</div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
  import {createNewAlbum} from "../../network/album";
  export default {
    name: "AlbumCreatePage",
    data(){
      return{
        newAlbumTitle:"",
      }
    },
    methods:{
      NewAlbum(){
        createNewAlbum({"newAlbumTitle":this.newAlbumTitle}).then(res => {
          console.log(res);
          this.$router.push("/manage/album")
        })
      }
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