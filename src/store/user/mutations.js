import { LocalStorage } from 'quasar'

export function SET_TOKEN(state,token) {
  return new Promise((resolve,reject)=>{
    try {
      LocalStorage.set("token",token)
      resolve(token)
    }catch (e) {
      reject(e)
    }
  })
}

export function SET_PERMISSIONS(state,permissions) {
  return new Promise((resolve,reject)=>{
    try {
      state.permissions = permissions
      resolve(permissions)
    }catch (e) {
      reject(e)
    }
  })
}

export function SET_ROUTER(state,routes) {
  return new Promise((resolve,reject)=>{
    try {
      state.routes = routes
      resolve(routes)
    }catch (e) {
      reject(e)
    }
  })
}

export function REMOVE_TOKEN(state) {
  return new Promise(async (resolve,reject)=>{
    try {
      await LocalStorage.remove("token");
      resolve()
    }catch (e) {
      reject(e)
    }
  })
}
