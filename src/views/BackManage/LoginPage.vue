<template>
  <div class="login">
    <div class="container">
      <div class="form">
        <div class="form-group">
          <label for="exampleInputEmail1">E-mail</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
          <small id="emailHelp" class="form-text text-muted">请折返罢！！！</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
        </div>
        <button class="btn btn-primary" @click="login">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {getToken} from "@/network/login";

  export default {
    name: "LoginPage",
    data(){
      return{
        email:"",
        password:""
      }
    },
    methods:{
      login(){
        let email=this.email;
        let password=this.password;
        let user={
          email,
          password,
        }
        getToken(user).then(res=>{
          console.log(res);
        })
      }
    }
  }
</script>

<style scoped>
  .container{
    background-color: rgb(36,36,36);
    color: #eeeeee;
    max-width: 750px;
    margin-top: 250px;
    width: 66%;
    border-radius: 8px;
  }
  form{
    padding: 30px 20px;
    color: #eeeeee;
  }
</style>