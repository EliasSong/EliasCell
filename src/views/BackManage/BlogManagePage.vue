<template>
  <div class="manage">
    <div class="jumbotron jumbotron-fluid managejubotron text-white">
      <div class="container">
        <h1 class="display-4">Backend Manage</h1>
        <hr class="my-4">
        <p class="lead">管理界面</p>
      </div>
    </div>
    <div class="container">
      <div class="card" v-for="(item,index) in allBlogData" :key="index">
        <div class="card-body">
          <h1 @click="blogDetialShow(item._id)">{{ item.blogTitle }}</h1>
          <div class="bodycontent">
            <hr class="my-4">
            <p class="lead">{{ item.blogDesc }}</p>
            <p class="lead">{{ item.blogTime }}</p>
          </div>
        </div>
        <div class="card-footer">
          <div class="btn btn-primary btn-lg" @click="modify(item._id)">修改</div>
          <div v-if="!confirmFlag" class="btn btn-danger btn-lg" @click="confirm">删除</div>
          <div v-else class="btn btn-danger btn-lg" @click="deleteblog(item._id)">确认删除</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {getAllBlog, deleteBlog} from "../../network/blog";

export default {
  name: "BlogManagePage",
  data() {
    return {
      allBlogData: [],
      confirmFlag: false
    }
  },
  created() {
    getAllBlog().then(res => {
      this.allBlogData = res.reverse()
    })
  },
  methods: {
    modify(id) {
      this.$router.push('/manage/blog/modify/' + id)
    },
    confirm() {
      this.confirmFlag = true
    },
    deleteblog(id) {
      this.confirmFlag = false;
      deleteBlog(id).then(res => {
        console.log(res);
        getAllBlog().then(res => {
          this.allBlogData = res
        })
      })
    },
    blogDetialShow(id) {
      this.$router.push("/blog/" + id)
    }
  }
}
</script>

<style scoped>
    .managejubotron {
      background-image: url("https://eliassong-1301617095.cos.ap-shanghai.myqcloud.com/Blog/image/Blog/BlogBackgroundImg.jpg");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    .managejubotron hr {
      border-style: solid;
      height: 1px;
      background-color: #ffffff;
    }

    .manage {
      color: #eeeeee;
    }

    .card {
      background-color: rgb(36, 36, 36);
      margin-bottom: 15px;
      transition: all 0.2s ease;
      -webkit-transition: all 0.2s ease;
    }


    .bodycontent {
      color: rgb(152, 152, 158);
    }

    .btn {
      margin-right: 15px;
    }

    .card-body h1:hover {
      color: #4682b4;
      text-decoration: none;
    }
</style>