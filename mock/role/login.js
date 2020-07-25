const Mock = require('mockjs')
const { uid } = require('quasar')

module.exports = [
  {
    url: '/login',
    type: 'post',
    response: config=>{
      return {
        status: 0,
        token:config.body.username+'-'+uid()
      }
    }
  }
]
