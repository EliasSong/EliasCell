import {request} from "./request";

export function getHomeBlogData(){
  return request({
    url:"/search/blog/homeBlogData",
    method:"GET"
  })
}
