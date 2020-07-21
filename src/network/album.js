import {request} from "./request";

export function getAllAlbum() {
  return request({
    url:"/search/album",
    method:"GET"
  })
}

export function getAlbumDetail(id) {
  return request({
    url:"/search/album/detail/"+id,
    method:"GET"
  })

}