import axios from "axios";
export function request(config) {
  //1.创建axios实例
  const  instance1=axios.create({
    baseURL:'http://152.136.185.210:7878/api/m5/category',
    params:{

    }

  })
  //2.1axios拦截器
  instance1.interceptors.request.use(config=>{
    // console.log(config);

    return config
  },err=>{

  })

  instance1.interceptors.response.use(res=>{
    return res.data
  },err=>{
    // console.log(err);
  })
  return  instance1(config)
}
