 import {request} from "@/network/request";

export function getHomeMultidata(){
  return request({

  })
}

export  function getHomeGoods(type,page){ //传入参数来改变网络地址
  return request({
    url:'',
    params:{
     type, //这里的type是对于 网址里面 type=“”  右边的值   ，page 同理,es6对象的增强语法，对象的解构
     page
    }
  })
}
