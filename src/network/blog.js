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
    url:"/search/blog",
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
// export function getRecommandDate() {
//   return request({
//     url: '/recommend'
//   })
// }
// export class DetailGood {
//   constructor(itemInfo , columns ,services) {
//     this.title = itemInfo.title;
//     this.desc = itemInfo.desc;
//     this.newPrice = itemInfo.price;
//     this.oldPrice = itemInfo.oldPrice;
//     this.discount = itemInfo.discountDesc;
//     this.columns = columns;
//     this.services = services;
//     this.realPrice = itemInfo.lowNowPrice;
//     this.topImages = itemInfo.topImages;
//   }
// }
// export class DetailShop{
//   constructor(shopInfo) {
//     this.logo = shopInfo.shopLogo;
//     this.name = shopInfo.name;
//     this.fans = shopInfo.cFans;
//     this.sells = shopInfo.cSells;
//     this.score = shopInfo.score;
//     this.goodsCount = shopInfo.cGoods;
//   }
// }