import{request} from "@/network/request";
import Qs from 'qs'
export function getToken(user){
  return request({
    url:"/login",
    method:"POST",
    data:Qs.stringify(user)
  })
}