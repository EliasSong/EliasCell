import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const WelcomePage = () => import("../views/WelcomePage/WelcomePage")
const Home = () => import("../views/Home/Home")
const BlogMainPage = () => import("../views/Blog/BlogMainPage")
const BlogDetailPage = () => import("../views/Blog/BlogDetailPage")
const BlogCreatePage =() => import("../views/BackManage/BlogCreatePage")
const BlogManagePage =() => import("../views/BackManage/BlogManagePage")
const AlbumMainPage =() => import("../views/Album/AlbumMainPage")
const AlbumDetailPage =() => import("../views/Album/AlbumDetailPage")

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
    path:"/blog",
    component:BlogMainPage
  },
  {
    path:"/blog/:blogId",
    component:BlogDetailPage
  },
  {
    path: "/album",
    component:AlbumMainPage,
  },
  {
    path: "/album/:albumId",
    component:AlbumDetailPage,
  },
  {
    path: "/manage/blog/create",
    component:BlogCreatePage
  },
  {
    path:"/manage/blog",
    component:BlogManagePage
  }
]

const router = new Router({
  routes,
  mode:'history'
})

export default router