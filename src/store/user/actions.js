/*
export function someAction (context) {
}
*/

export function setToken(context,token) {
   return new Promise(async (resolve, reject) => {
     try {
       await context.commit('SET_TOKEN',token)
       resolve()
     }catch (e) {
       reject(e)
     }
   })
}

export function setPermisiions(context,permissions) {
  return new Promise(async (resolve, reject) => {
    try {
      await context.commit('SET_PERMISSIONS',permissions)
      resolve()
    }catch (e) {
      reject(e)
    }
  })
}

export function setRouter(context,routes) {
  return new Promise(async (resolve, reject) => {
    try {
      await context.commit('SET_ROUTER',routes)
      resolve()
    }catch (e) {
      reject(e)
    }
  })
}

export function removeToken(context) {
  return new Promise(async (resolve, reject) => {
    try {
      await context.commit('REMOVE_TOKEN')
      resolve()
    }catch (e) {
      reject(e)
    }
  })
}
