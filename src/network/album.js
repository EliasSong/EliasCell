import {request} from "./request";

export function getAllAlbum() {
  return request({
    url:"/search/album",
    method:"GET"
  })
}