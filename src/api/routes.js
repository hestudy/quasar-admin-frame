import request from '../utils/request'

export function fetchRoutes() {
  return request({
    url:'/routes',
    method:'get',
  })
}
