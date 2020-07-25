import store from "../store";
import router from '../router';
import routes from '../router/routes';

//路由守卫
router.beforeEach((to, from, next) => {
  if(store.getters['user/getRouter'].length===0){
    store.dispatch('user/setRouter',routes)
    console.log(to)
    //hack方法，以确保addRoutes是完整的
    //设置replace: true，这样导航将不会离开历史记录
    next({...to,replace:true})
  }else{
    console.log(to)
    next()
  }
})
