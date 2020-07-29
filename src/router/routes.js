import {i18n} from "boot/i18n";

const routes = [
  {
    path: '/',
    component: () => import('layouts/Login'),
    hide:true
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
    hide:true
  }
]

export default routes
