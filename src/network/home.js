import {request} from "./request";

export function getBlog(){
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