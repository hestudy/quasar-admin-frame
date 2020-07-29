import request from '../utils/request'

export function home() {
  return request({
    url:'/home',
    method:'get',
  })
}
