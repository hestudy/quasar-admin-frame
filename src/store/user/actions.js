import {fetchRoutes} from "src/api/routes";
import {i18n} from "boot/i18n";
import routes from '../../router/routes'

export function setToken(context, token) {
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

function getAsyncRouter() {
  return new Promise(async (resolve, reject) => {
    try {
      let asyncRoutesMap = {
        "Layout": () => import("../../layouts/Layout"),
        "Home": () => import("../../pages/Home"),
        "UserManage": () => import("../../pages/usermanage/UserManage"),
        "PermissionManage": () => import("../../pages/usermanage/PermissionManage"),
      }
      let asyncRoutes = await fetchRoutes()
      let addRoutes = [];
      for (let rootRouter of asyncRoutes.data) {
        let addRoutesMap = {
          path: rootRouter.path,
          component: asyncRoutesMap["Layout"],
          children: []
        }
        if (rootRouter.meta) {
          addRoutesMap.meta = {
            title: i18n.t(rootRouter.meta.title),
            icon: rootRouter.meta.icon,
          }
        }
        for (let childRouter of rootRouter.children) {
          let addRoutesChildrenMap = {
            path: childRouter.path,
            name: childRouter.name,
            component: asyncRoutesMap[childRouter.name],
            meta: {title: i18n.t(childRouter.meta.title), icon: childRouter.meta.icon}
          }
          addRoutesMap.children.push(addRoutesChildrenMap)
        }
        addRoutes.push(addRoutesMap)
      }
      resolve([...routes,...addRoutes])
    } catch (e) {
      reject(e)
    }
  })
}

export function resetRouter(context) {
  return new Promise(async (resolve, reject) => {
    try {
      let routes = await getAsyncRouter();
      await context.commit('RESET_ROUTER',routes);
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
