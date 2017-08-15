
import Vue from 'vue';
import Vuex from 'vuex';
import {Add} from './modules/Add.js';
import {Cart} from './modules/Cart.js';
import {Products} from './modules/Products.js';
import {Check} from './modules/Check.js';
Vue.use(Vuex);
export const store = new Vuex.Store({
    modules:{
        Add:Add,
        Cart:Cart,
        Products:Products,
        Check:Check
    }
});
