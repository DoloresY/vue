'use strict'

import Vue from 'vue';
import App from './app';

import axios from 'axios'
import VueAxios from 'vue-axios'

import Vuex from 'vuex'

import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS

import {store} from 'src/store/store';

import Common from 'src/public/js/common';	//自定义全局函数
Vue.use(Common);

Vue.use(Vuex);
Vue.use(iView);
Vue.use(VueAxios, axios);

import {router} from './router';
new Vue({ // eslint-disable-line
  el: '#app',
  router,
	store,  
  render: h => h(App)
}).$mount("#main");