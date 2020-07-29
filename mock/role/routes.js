const Mock = require('mockjs')

module.exports = [
  {
    url: '/routes',
    type: 'get',
    response: config=>{
      let token = config.headers.token
      if(token.includes("admin")){
        return {
          status: 0,
          data: [
            {
              path:'/Home',
              children:[
                {
                  path:'/',
                  name:'Home',
                  meta:{title:'home.title',icon:'home'}
                }
              ]
            },
            {
              path:'/UserManage',
              meta:{title:"usermanage.user",icon:'supervisor_account'},
              children:[
                {
                  path:'/',
                  name:'UserManage',
                  meta:{title:'usermanage.usermanage',icon:'account_box'}
                },
                {
                  path:'/PermissionManage',
                  name:'PermissionManage',
                  meta:{title:'usermanage.permissionmanage',icon:'vpn_key'}
                },
              ]
            }
          ]
        }
      }else{
        return {
          status: 0,
          data: [
            {
              path:'/Home',
              children:[
                {
                  path:'/',
                  name:'Home',
                  meta:{title:'home.title',icon:'home'}
                }
              ]
            }
          ]
        }
      }
    }
  }
]
