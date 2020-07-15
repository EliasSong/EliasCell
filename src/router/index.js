import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const WelcomePage = () => import("../views/WelcomePage/WelcomePage")

const Home = () => import("../views/Home/Home")

const Bubble = () => import("../views/Bubble/bubble")

const BlogMainPage = () => import("../views/Blog/BlogMainPage")

const BlogDetailPage = () => import("../views/Blog/BlogDetailPage")

const BlogManagePage = () => import("../views/Blog/BlogManagePage")

const BlogCreatePage =() => import("../views/BackManage/BlogCreatePage")


const routes=[
  {
    path:"",
    component:WelcomePage
  },
  {
    path:"/home",
    component:Home
  },
  {
    path:"/bubble",
    component:Bubble
  },
  {
    path:"/blog",
    component:BlogMainPage
  },
  {
    path:"/blog/:blogId",
    component:BlogDetailPage
  },
  {
    path: "/blog/:blogId/manage",
    component:BlogManagePage,
  },
  {
    path: "/manage/blog/create",
    component:BlogCreatePage
  }
]

const router = new Router({
  routes,
  mode:'history'
})

export default router