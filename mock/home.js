/*
 * @Descripttion: 接口
 * @version: 
 * @Author: dsk
 * @Date: 2020-04-8
 * @LastEditors: dsk 
 * @LastEditTime: 
 */

export default {
  'GET /returnlist': {
    success: true,
    data: [
      { key: "1", name: "android", img: "android", isshow: true },
      { key: "2", name: "apple", img: "apple", isshow: true },
      { key: "3", name: "windows", img: "windows", isshow: true }
    ],
    code: "00000",
    message: null
  },
  'GET /returnlist2': {
    success: true,
    data: [
      { key: "1", name: "windows", img: "windows", isshow: true },
      { key: "2", name: "apple", img: "apple", isshow: true },
      { key: "3", name: "android", img: "android", isshow: true }
    ],
    code: "00000",
    message: null
  },
}
