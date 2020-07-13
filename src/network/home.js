import {request} from "./request";

export function getHomeBlogData(){
  return request({
    url:"/blog",
    method:"GET"
  })
}

export function getHomeGoods(type,page){
  return request({
    url: "/home/data",
    method: "GET",
    params: {
      type,
      page
    }
  });
}