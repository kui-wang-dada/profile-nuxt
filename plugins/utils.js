import Vue from 'vue';
import * as utils from '~/utils/index.js';

import moment from 'moment';

var com = {
  install(Vue) {
    Vue.prototype.$utils = utils;
    Vue.prototype.$bus = new Vue();

    Vue.filter('NumberFormat', function (value) {
      if (!value) {
        return '数据正在同步中';
      }
      const intPartFormat = value.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'); // 将整数部分逢三一断
      return intPartFormat;
    });

    Vue.filter('moment', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
      return moment(dataStr).format(pattern);
    });

    Vue.filter('expertTime', function (dataStr) {
      const data1 = moment(dataStr).format('YYYY');
      if (data1 === '2019') {
        return moment(dataStr).format('YYYY年MM月DD日');
      } else {
        return moment(dataStr).format('MM月DD日');
      }
    });

    Vue.filter('checkImg', function (item, type) {
      let remoteUrl = item;
      if (!item) {
        return '';
      }

      if (!remoteUrl.includes('http')) {
        remoteUrl = `https://cms.dadafastrun.com${remoteUrl}`;
      }

      return remoteUrl;
    });
    Vue.filter('checkImgScale', function (item, type) {
      let remoteUrl = '';
      if (typeof item === 'object') {
        remoteUrl = item.attach_image_url || `https://erp.wholerengroup.com${item.attach_image}`;
      } else {
        remoteUrl = `https://erp.wholerengroup.com${item}`;
      }

      const pinjieUrl = remoteUrl.split('/').slice(-1)[0];

      const imgType = pinjieUrl.split('.').slice(-1)[0];

      if (type === 100) {
        remoteUrl = remoteUrl + '_100-.' + imgType;
      }
      if (type === 1000) {
        remoteUrl = remoteUrl + '_-1000.' + imgType;
      }
      return remoteUrl;
    });

    Vue.filter('checkTime', function (time) {
      const startDate = moment.tz(time, 'America/New_York').utc();
      const endDate = moment().utc();

      // const ms = endDate.diff(startDate) // 返回毫秒数

      const month = endDate.diff(startDate, 'months'); // 0
      const weeks = endDate.diff(startDate, 'weeks'); // 1
      const days = endDate.diff(startDate, 'days'); // 7
      const hours = endDate.diff(startDate, 'hours'); // 7
      const minutes = endDate.diff(startDate, 'minutes'); // 7
      // console.log(ms, month, weeks, days, hours, minutes, startDate, endDate, 'startDate')
      if (month) {
        return '';
      } else if (weeks) {
        return '';
      } else if (days) {
        return '';
      } else if (hours) {
        return hours + '小时前';
      } else if (minutes) {
        return minutes + '分钟前';
      } else {
        return '';
      }
    });

    Vue.filter('checkRate', function (dataStr) {
      if (!dataStr) {
        return '暂无数据';
      }
      return `${dataStr}%`;
    });
  }
};
Vue.use(com);
