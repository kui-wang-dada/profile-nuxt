/**
 * 将秒数转为时间格式
 *
 * @format
 * @param {number} second
 */

import _ from 'lodash';
import moment from 'moment';

export * from './constant';

export function formatTime(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern);
}
/**
 * 异常处理
 * @param {boolean} condition
 * @param {string} msg
 */
export function assert(condition, msg) {
  if (!condition) throw new Error(`[Apior] ${msg}`);
}

/**
 * 默认图片，用于拼接图片地址&填充默认图片
 * @data {string} 图片地址
 * @isPic {boolean} 是否是图片模式，默认为头像模式
 */
export function checkImg(item) {
  let remoteUrl = '';
  let prefix = '';
  if (!item) {
    return '';
  }

  if (typeof item === 'object') {
    remoteUrl = item.attach_image_url || item.attach_image;
  } else {
    remoteUrl = item;
  }
  if (!remoteUrl) {
    return '';
  }
  let arr = remoteUrl.split('.');
  prefix = arr[arr.length - 1];

  if (!remoteUrl.includes('http')) {
    remoteUrl = `https://erp.wholerengroup.com${remoteUrl}`;
  }

  if (remoteUrl.includes('wr-cdn.wholeren.cn') || remoteUrl.includes('res.accspeed.com')) {
    return remoteUrl;
  }
  remoteUrl = `${remoteUrl}_360-.${prefix}`;

  return remoteUrl;
}

/**
 * 拿缓存数据
 * @param {String} key
 */
export function getStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

/**
 * 设置缓存数据
 * @param {String} key
 * @param {all} val
 */
export function setStorage(key, val) {
  return localStorage.setItem(key, JSON.stringify(val));
}
/**
 * 搜索字符高亮
 * @param {String} key
 * @param {all} val
 */
export function highLight(str, search) {
  if (search) {
    search = search.replace(/(^\s*)|(\s*$)/g, '');
    const mySearch = `<span style="color:#333;background:#fff442;padding:1px 3px;">${search}</span>`;
    return str.replace(search, mySearch);
  } else {
    return str;
  }
}
