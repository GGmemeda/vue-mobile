import Vue from 'vue';
import Router from 'vue-router';
import zhc from '../views/wordsconfig';

Vue.use(Router);

export const constantRouterMap = [{
  path: '/',
  component: () => import ('@/views/dishesNav/index'),
  name: 'Dashboard',
  meta: { title: zhc.route.dashboard, icon: 'excel', noCache: true }
},
  // {
  //   path: '/404',
  //   component: () =>
  //     import ('@/views/errorPage/404'),
  //   // hidden: true
  // }, {
  //   path: '/401',
  //   component: () =>
  //     import ('@/views/errorPage/401'),
  //   hidden: true
  // }, { path: '*', redirect: '/404', hidden: true }
];

export default new Router({
  routes: constantRouterMap
});
