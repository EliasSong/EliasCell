import {request} from "./request";

export function getHomeBlogData(){
  return request({
    url:"/search/blog",
    method:"GET"
  })
}
