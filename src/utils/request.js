/*
 * @Descripttion: 
 * @version: 
 * @Author: daoyi
 * @Date: 2020-02-13 17:41:07
 * @LastEditors: daoyi
 * @LastEditTime: 2020-03-13 19:44:28
 */
// import ErrorMessage from './errorMessage';
import Api from './api';
import Url from '../api/url';

const fetch = require('dva').fetch;

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  if(response.status === 401 || response.status === 400){
    console.log(response)
    // return  Api.logout('接口报错')
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function customOptions(options) {  
  let newOptions = '';
  for (var key in options) {
    newOptions += `${key}=${options[key]}&`
  }
  return newOptions.slice(0, newOptions.length - 1);
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {

  options.method = options.method ? options.method : 'POST';

  options.headers = options.headers || {};
  options.headers =  {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    ...options.headers
  }
  if(options.headers['Content-Type'].indexOf('/json') > -1){
    options.body = JSON.stringify(options.body)
  }else{
    options.body = customOptions(options.body);
  }
  
  if(url !== Url.login && url !== Url.codeLogin){//登录接口增加特殊参数
    options.headers ={
      ...options.headers,
       "token" : `${Api.getCookie('userToken') || ''}`
    }
  }


  if(options.method === 'GET'){
    let _getData = options.body ? `${url}?${options.body}` : url
    return fetch(_getData, {
      headers: options.headers,
      method: options.method,
    })
    .then(checkStatus)
    .then(parseJSON)
    .then(res =>  {
      return res;   
      // if (res.success || res.errorCode === 0) {
      //   return res;
      // } else {
      //   // ErrorMessage(res,res.errorCode);
      //   return {}
      // }
    })
    .catch(err =>{
      return err;
    });
  }else{
    return fetch(url, {
      headers: options.headers,
      method: options.method,
      body: options.body
    })
    .then(checkStatus)
    .then(parseJSON)
    .then(res => {
      return res;
      // if (res.success || res.errorCode === 0) {
      //   return res;
      // } else {
      //   // ErrorMessage(res,res.errorCode);
      //   return {}
      // }
    })
    .catch(err => {
      return err;
    });
  }
}
