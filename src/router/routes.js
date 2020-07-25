import {i18n} from "boot/i18n";

const routes = [
  {
    path: '/',
    component: () => import('layouts/Login'),
    hide:true
  },
  {
    path:'/Home',
    component:()=>import('../layouts/Layout'),
    children:[
      {
        path:'/',
        name:'Home',
        component:()=>import('../pages/Home'),
        meta:{title:i18n.t('home.title'),icon:'home'}
      }
    ]
  },
  {
    path:'/UserManage',
    component:()=>import('../layouts/Layout'),
    meta:{title:i18n.t("usermanage.user"),icon:'supervisor_account'},
    children:[
      {
        path:'/',
        name:'UserManage',
        component:()=>import('../pages/usermanage/UserManage'),
        meta:{title:i18n.t('usermanage.usermanage'),icon:'account_box'}
      },
      {
        path:'/PermissionManage',
        name:'PermissionManage',
        component:()=>import('../pages/usermanage/PermissionManage'),
        meta:{title:i18n.t('usermanage.permissionmanage'),icon:'vpn_key'}
      },
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
    hide:true
  }
]

export default routes
