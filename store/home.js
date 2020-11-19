/** @format */

import $api from '@/config/axios/api';
import * as $utils from '@/utils/index.js';
export default {
  state: () => ({
    course: []
  }),
  mutations: {
    // 设置用户信息
    SET_COURSE: (state, data) => {
      state.course = data;
    }
  },
  actions: {
    /**
     * @msg:拿到用户信息
     * @param {type}
     * @return: promise
     */
    async GetServerData(store) {
      let getCourse = $api['home/course']().catch(() => Promise.resolve({}));

      let [res1] = await Promise.all([getCourse]);

      store.commit('SET_COURSE', res1);
    },
    /**
     * @msg:拿到用户信息
     * @param {type}
     * @return: promise
     */
    async GetClientData(store) {}
  }
};
