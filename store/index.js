/** @format */

import createLogger from 'vuex/dist/logger';
const debug = process.env.NODE_ENV !== 'production';
export default {
  state: () => ({}),
  getters: {},
  plugins: debug ? [createLogger()] : [],
  mutations: {},
  actions: {}
};
