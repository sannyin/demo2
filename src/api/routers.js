/*
 * @Descripttion: 
 * @version: 
 * @Author: daoyi
 * @Date: 2020-03-23 16:19:52
 * @LastEditors: daoyi
 * @LastEditTime: 2020-03-26 14:41:55
 */
let routers = [{
    id: '1',
    path: '/',
    name: '首页'
  },
  {
    id: '2',
    path: '/demand',
    name: '需求管理',
    children : [
      {
        id : '21',
        name : '创建需求',
        path : '/demand'
      },
      {
        id : '22',
        name : '我的创建',
        path : '/'
      },
      {
        id : '23',
        name : "我的需求",
        path : '/'
      },
      {
        id : '24',
        name : '我的提成',
        path : '/'
      },
    ]

  },
  {
    id: '3',
    path: '/',
    name: '提成管理'
  },
  {
    id: '4',
    path: '/',
    name: '结算管理'
  },
  {
    id: '5',
    path: '/',
    name: '业务管理'
  },
  {
    id: '6',
    // path: '/',
    name: '其他',
    children : [
      {
        id : '61',
        name : '软件管理',
        path : '/software'
      },
      {
        id : '62',
        name : '题库管理',
        path : '/questionBank'
      },
      {
        id : '64',
        name : "考试管理",
        path : '/examManagement'
      },
      {
        id : '63',
        name : '在线考试',
        path : '/examList'
      },
    ]
  }
]
export default routers;
