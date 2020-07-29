const Mock = require('mockjs')
const { date } = require('quasar')

module.exports = [
  {
    url: '/home',
    type: 'get',
    response: config=>{
      let newDate  = new Date()
      return {
        status: 0,
        data: {
          dashboard:[
            {
              title:'userCount',
              content:1280
            },
            {
              title:'userOnlineToDay',
              content:1008
            },
            {
              title:'payCount',
              content:3280
            },
            {
              title:'payToday',
              content:199
            },
          ],
          userLine:[
            {
              date:date.subtractFromDate(newDate,{days:7}),
              number:Mock.mock('@integer(0, 1280)')
            },
            {
              date:date.subtractFromDate(newDate,{days:6}),
              number:Mock.mock('@integer(0, 1280)')
            },
            {
              date:date.subtractFromDate(newDate,{days:5}),
              number:Mock.mock('@integer(0, 1280)')
            },
            {
              date:date.subtractFromDate(newDate,{days:4}),
              number:Mock.mock('@integer(0, 1280)')
            },
            {
              date:date.subtractFromDate(newDate,{days:3}),
              number:Mock.mock('@integer(0, 1280)')
            },
            {
              date:date.subtractFromDate(newDate,{days:2}),
              number:Mock.mock('@integer(0, 1280)')
            },
            {
              date:date.subtractFromDate(newDate,{days:1}),
              number:Mock.mock('@integer(0, 1280)')
            },
            {
              date:newDate,
              number:Mock.mock('@integer(0, 1280)')
            },
          ],
          payLine:[
            {
              date:date.subtractFromDate(newDate,{days:7}),
              number:Mock.mock('@integer(0, 328)')
            },
            {
              date:date.subtractFromDate(newDate,{days:6}),
              number:Mock.mock('@integer(0, 328)')
            },
            {
              date:date.subtractFromDate(newDate,{days:5}),
              number:Mock.mock('@integer(0, 328)')
            },
            {
              date:date.subtractFromDate(newDate,{days:4}),
              number:Mock.mock('@integer(0, 328)')
            },
            {
              date:date.subtractFromDate(newDate,{days:3}),
              number:Mock.mock('@integer(0, 328)')
            },
            {
              date:date.subtractFromDate(newDate,{days:2}),
              number:Mock.mock('@integer(0, 328)')
            },
            {
              date:date.subtractFromDate(newDate,{days:1}),
              number:Mock.mock('@integer(0, 328)')
            },
            {
              date:newDate,
              number:Mock.mock('@integer(0, 328)')
            },
          ]
        }
      }
    }
  }
]
