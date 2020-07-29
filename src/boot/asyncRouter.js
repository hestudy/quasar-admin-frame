import store from "../store";
import router from '../router';
import routes from '../router/routes';
import {fetchRoutes} from "src/api/routes";
import {i18n} from "boot/i18n";

//路由守卫
router.beforeEach(async (to, from, next) => {
  if(store.getters['user/getRouter'].length===0){
    let asyncRoutesMap = {
      "Layout":()=>import("../layouts/Layout"),
      "Home":()=>import("../pages/Home"),
      "UserManage":()=>import("../pages/usermanage/UserManage"),
      "PermissionManage":()=>import("../pages/usermanage/PermissionManage"),
    }
    let asyncRoutes =  await fetchRoutes()
    let addRoutes = [];
    for(let rootRouter of asyncRoutes.data){
      let addRoutesMap = {
        path:rootRouter.path,
        component:asyncRoutesMap["Layout"],
        children:[]
      }
      if(rootRouter.meta){
        addRoutesMap.meta = {
          title:i18n.t(rootRouter.meta.title),
          icon:rootRouter.meta.icon,
        }
      }
      for(let childRouter of rootRouter.children){
        let addRoutesChildrenMap = {
          path:childRouter.path,
          name:childRouter.name,
          component:asyncRoutesMap[childRouter.name],
          meta:{title:i18n.t(childRouter.meta.title),icon:childRouter.meta.icon}
        }
        addRoutesMap.children.push(addRoutesChildrenMap)
      }
      addRoutes.push(addRoutesMap)
    }
    router.addRoutes(addRoutes)
    await store.dispatch('user/setRouter',[...routes,...addRoutes])
    console.log(to)
    //hack方法，以确保addRoutes是完整的
    //设置replace: true，这样导航将不会离开历史记录
    next({...to,replace:true})
  }else{
    console.log(to)
    next()
  }
})
