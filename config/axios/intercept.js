/** @format */

import axios from 'axios';

import { CONSOLE_REQUEST_ENABLE, CONSOLE_RESPONSE_ENABLE } from '../index';
const CancelToken = axios.CancelToken;
const CancelPromise = {};

/**
 * 请求成功拦截器
 * @param req 请求参数
 * @returns {*}
 */
export function requestSuccessFunc(req) {
  // 取消重复请求
  // if (CancelPromise[req.url]) {
  //   CancelPromise[req.url]()
  // }

  req.cancelToken = new CancelToken(c => {
    CancelPromise[req.url] = c;
  });

  if (process.client) {
    CONSOLE_REQUEST_ENABLE && console.info('requestInterceptorFunc', `url:${req.url}`, req);
  }

  // 自定义请求拦截逻辑，处理权限，请求发送监控等
  return req;
}

/**
 * 请求失败拦截器
 * @param reqError 失败信息
 * @returns {Promise.<*>}
 */
export function requestFailFunc(reqError) {
  // 自定义请求失败逻辑，处理断网，请求发送监控等
  //   Toast("请检查您的网络状态");
  return Promise.reject(reqError);
}

/**
 * 响应成功拦截器
 * @param res 返回数据
 * @returns {*}
 */
export function responseSuccessFunc(response) {
  if (process.client) {
    // 自定义响应成功逻辑，全局拦截接口，根据不同业务做不同处理，响应成功监控等
    CONSOLE_RESPONSE_ENABLE && console.info('responseInterceptorFunc', response);
  }
  if (response && response.data) {
    // 全局对code码进行处理

    // console.log(response)
    return response.data;
  } else {
    // 异常处理
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject('error：' + (response && response.data && response.data.msg));
  }
}

/**
 * 响应失败拦截器
 * @param resError 失败信息
 * @returns {Promise.<*>}
 */
export function responseFailFunc(resError) {
  // 响应失败，可根据resError信息做监控处理

  console.log('resErrpr', resError);
  if (resError && resError.response) {
    switch (resError.response.status) {
      case 400:
        resError.message = '请求错误(400)';
        break;
      case 401:
        resError.message = '未授权，请重新登录(401)';
        break;
      case 403:
        resError.message = '拒绝访问(403)';
        break;
      case 404:
        resError.message = '请求出错(404)';
        break;
      case 408:
        resError.message = '请求超时(408)';
        break;
      case 500:
        resError.message = '服务器错误(500)';
        break;
      case 501:
        resError.message = '服务未实现(501)';
        break;
      case 503:
        resError.message = '服务不可用(503)';
        break;
      case 505:
        resError.message = 'HTTP版本不受支持(505)';
        break;
      default:
        resError.message = `连接出错(${resError.response.status})!`;
    }
  }

  return Promise.reject(resError);
}
