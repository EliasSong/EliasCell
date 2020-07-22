import {request} from "./request";
import Qs from 'qs'

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

export function createNewAlbum(data) {
  return request({
    method: 'post',
    url: '/create/album',
    data: Qs.stringify(data),
  })
}

export function addNewImagesToAlbum(data) {
  return request({
    method: 'post',
    url: '/create/album/image',
    data: data,
  })
}

export function deleteAlbum(id){
  return request({
    method: 'delete',
    url: '/delete/album/'+id,
  })

}