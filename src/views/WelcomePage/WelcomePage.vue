<template>
  <div class="welcome">
    <div class="welcomecontent">
      <div class="container">
        <div class="jumbotron">
          <p class="lead">您好！请折返罢，这里除了我，什么都没有。</p>
          <hr class="my-4">
          <div class="btn btn-danger btn-lg enter" data-toggle="modal" data-target="#exampleModal">仍然前往 <i class="fas fa-angle-double-right"></i></div>
          <div class="modal fade" id="exampleModal" tabindex="10" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  <p class="lead">本博客内置了音乐播放器，请注意自己的扬声器音量，或者使用耳机来获得更好的体验。</p>

                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary" data-dismiss="modal" @click="goToHomePage">Go!</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<script>

  export default {
    name: "WelcomePage",
    data(){
      return {
        flag:"first"
      }
    },
    methods:{
      goToHomePage(){
        this.$router.push("/home")
      }

    },
    deactivated() {


    },
    activated() {

    },
    mounted() {

    }
  }
</script>

<style scoped>

  .welcomecontent{
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 2000;
    transform: translate(-50%,-50%);
  }
  .jumbotron{
    min-width: 320px;
    background-color: rgb(28,28,29);
    color:#ffffff;
  }
  hr{
    border-style: solid;
    height: 1px;
    background-color: #fff;
  }
  .modal-content{
    background-color: rgb(28,28,28);
    color: #eeeeee;
  }
  .modal-content p{
    margin-bottom: 0;
  }
  .modal-footer{
    border-top:1px solid rgb(152,152,158);
  }





</style>