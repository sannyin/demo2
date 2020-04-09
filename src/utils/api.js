/*
 * @Descripttion: 
 * @version: 
 * @Author: shui
 * @Date: 2020-03-23 16:50:02
 * @LastEditors: daoyi
 * @LastEditTime: 2020-03-26 09:55:02
 */


const Api = {
  userData(value){
    return value
  },
  /**
   * 保存cookie
   * @param name cookie的名称
   * @param value cookie的值
   */
  setCookie(name, value) {
    var exp = new Date();
    exp.setTime(exp.getTime() + 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
  },
  /**
   * 获取cookie
   * @param name cookie的名称
   */
  getCookie(name) {
    const reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    const arr = document.cookie.match(reg);
    if (arr)
      return unescape(arr[2]);
    else
      return null;
  },
  /**
   * 删除cookie
   * @param name cookie的名称
   */
  removeCookie(name) {
    let exp = new Date();
    exp.setDate(exp.getDate() - 1);
    document.cookie = name + "='';expires=" + exp;
  },
  /**
   *  todo 获取url上name的值
   *  @param {*} url
   *  @param {*} name
   */
  _getQueryString(url) {
    let queryIndex = url.indexOf('?');
    let search = queryIndex > -1 ? url.slice(queryIndex) : '';
    return search.split(/[?&]/)
      .filter(param => !!param)
      .map(param => param.split('='))
      .filter(param => param.length === 2)
      .reduce((r, param) => {
        r[param[0]] = decodeURIComponent(param[1]);
        return r;
      }, {});
  },

  /**
   * @description: 字符串长度判断
   * @param {str} 字符串 
   * @return: 
   */
  getStrLength(str) {
    let realLength = 0,
      len = str.length,
      charCode = -1;
    for (var i = 0; i < len; i++) {
      charCode = str.charCodeAt(i);
      if (charCode >= 0 && charCode <= 128) realLength += 1;
      else realLength += 2;
    }
    return realLength;
  }
}

export default Api;
