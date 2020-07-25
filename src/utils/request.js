import Axios from 'axios'
import { Notify } from 'quasar'

let instance = Axios.create({
  baseURL: '/dev-api', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 8000 // request timeout
})

//  请求拦截
instance.interceptors.request.use(
  config => {

    return config
  },
  err => {
    return Promise.reject(err)
  })

//响应拦截
instance.interceptors.response.use(
  response => {
    //拦截响应，做统一处理

    return response.data
  },
  //接口错误状态处理，也就是说无响应时的处理
  error => {
    Notify.create({
      message: error.message,
      color:'negative',
      textColor:'white',
      timeout:2000,
      position:'top'
    })
    return Promise.reject(error) // 返回接口返回的错误信息
  })

export default instance
