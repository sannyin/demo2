/*
 * @Descripttion: 
 * @version: 
 * @Author: daoyi
 * @Date: 2020-03-23 16:55:48
 * @LastEditors: daoyi
 * @LastEditTime: 2020-03-26 12:14:46
 */
let local = 'http://192.168.4.41:8099';
// let post = 'http://192.168.3.184:8099';

let url = {
  generatepaper: `/home/others/userexamination/getuserlist`,   //生成试卷
  getinfobyid: `/home/others/userexamination/getinfobyid`,       //试卷详情
  submitAnswer: `home/others/Userexamination/submitAnswer`,      //提交答案
  getuserlist: `${local}home/others/userexamination/getuserlist`,
  //软件列表新增
  software: `${local}home/others/Softmanage/addDownloadrecord`,
  // 获取软件列表
  // softlist: `${local}home/others/Softmanage/getSoftwareList`,
  //题库列表
  questionlist: '/api/testBaseManagementList',//`${local}home/others/questionmanage/getlist`,
  //题库详情
  questiondetail: '/api/questionDetail',//`${local}home/others/questionmanage/getQuestionInfoById`,
  //题库删除
  questiondelete: '/api/questionDelete',//`${local}/home/others/questionmanage/delByid`,
  //题库保存
  questionsave: '/api/questionSave',//`${local}/home/others/questionmanage/savequestion`,

  // 获取软件列表 `${local}home/others/Softmanage/getSoftwareList`
  softlist: '/list2' ,
  //上传文件接口地址
  upload:"https://www.mocky.io/v2/5cc8019d300000980a055e76",
  //登录
  login : `/api/user/emailLogin`,
  //钉钉扫码登录
  codeLogin:'/api/user/dingdingCallback',
  //通过token获取用户信息
  tokenLogin : '/api/user/getUserByToken',
  //获取验证码
  getCode:"/api/user/getImgcCode",
  //修改密码
  revisePassword:'/api/revisePassword',
  //获取个人信息
  getUserInfo:'/api/user/personalInformation',
  //退出登录
  logout:'/api/user/outLogin',
  //获取员工通讯录列表
  getUserListByBase:'/api/user/getUserListByBase',
  //获取部门列表
  getDepartmentList:'/api/department/getDepartmentList',
  // 需求列表接口
  demandlist:'/demandlistdata',
  // 需求列表条数请求接口
  getdemeandlistnumber:"/demandlistnumber",
  // 查看发包单位地址
  getselectList:'/api/contractingUnit/selectList',
  //运营通讯录接口
  getOperateMailList:"/getOperateMailList",
  //添加运营通讯录人员
  addoperateMail:'/addoperateMail'
}
export default url;
