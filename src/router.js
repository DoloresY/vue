import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

//1.定义（路由）组件
import * as Index from 'src/pages/index/main.js';
/*import * as Platform from 'src/pages/platform/main.js';*/
import {PlatLists,PlatDetail} from 'src/pages/platform/main.js';
import * as Cooperate from 'src/pages/cooperate/main.js';
import * as News from 'src/pages/news/main.js';
import * as About from 'src/pages/about/main.js';
import * as Set from 'src/pages/set/main.js';
import * as Account from 'src/pages/account/main.js';
import * as Activity from 'src/pages/activity/index';
import * as NotFound from 'src/pages/NotFound/index';
// 2. 定义路由
const routes = [
  { path: '/', component: Index.Index, name:'index'},
  /*{ path: '/platform/:type', component: Platform.PlatLists, name:'platform' },*/
  { path: '/platform', component: PlatLists, name:'platform' },
  { path: '/platdetail', component: PlatDetail, name:'platform' },
  { path: '/cooperate', component: Cooperate.Cooperate, name:'cooperate' },
  { path: '/news/:type', component: News.News, name:'news' },
  { path: '/about/:type', component: About.About, name:'about' },
  { path: '/set/:type', component: Set.Set, name:'set'},
  { path: '/account', component: Account.Account, name:'account',
  	beforeEnter: (to, from, next) => {
        if (!localStorage.token) {
              next({
                  path:'/'
                //  query: { redirect: to.fullPath } //这个我不知道是干啥的 字义上理解是重定向:当前url
              })
        } else {
          next();
        }
    }
  },
  { path: '/activity', component: Activity, name:'activity' },
/*  { path: '*', component: NotFound, name:'404' }*/
]

// 3. 创建 router 实例
export const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
  	if(savedPosition) {
  		return savedPosition
  	} else {
  		return { x:0, y:0 }
  	}
  }
})