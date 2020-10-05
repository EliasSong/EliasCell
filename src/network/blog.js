import {request} from "./request";
import axios from "axios"
import Qs from 'qs'


export function getBlogDetail(id) {
  return request({
    url:'/search/blog/detail/'+id,
    method:"GET",
  })

}

export function getBlogRecommend(tag) {
  return request({
    url:"/search/blog/tag/"+tag,
    method:"GET"
  })

}
export function deleteBlog(id) {
  return request({
    url:"/delete/blog/"+id,
    method:"DELETE"
  })

}

export function getAllBlog() {
  return request({
    url:"/search/blog/allBlogDataList",
    method:"GET"
  })

}

export function createNewBlog(data) {
  return request({
    method: 'post',
    url: '/create/blog',
    data: Qs.stringify(data),
  })

}
export function modifyBlog(id,data) {
  return request({
    method: 'put',
    url: '/modify/blog/'+id,
    data: Qs.stringify(data),
  })

}