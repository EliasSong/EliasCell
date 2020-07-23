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
const AlbumCreatePage =() => import("../views/BackManage/AlbumCreatePage")
const AlbumManagePage =() => import("../views/BackManage/AlbumManagePage")
const ImageCreatePage =() => import("../views/BackManage/ImageCreatePage")
const AppsPage =() => import("../views/App/AppsPage")

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
  },
  {
    path:"/manage/album/create",
    component:AlbumCreatePage,
  },
  {
    path:"/manage/album",
    component:AlbumManagePage
  },
  {
    path:"/manage/album/:albumId/image/create",
    component:ImageCreatePage
  },
  {
    path:"/app",
    component:AppsPage
  }
]

const router = new Router({
  routes,
  mode:'history'
})

export default router