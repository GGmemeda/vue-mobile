import clamp from './clamp';

const install = function (Vue) {
  Vue.directive('clamp', clamp);
};

if (window.Vue) {
  window['clamp'] = clamp;
  Vue.use(install); // eslint-disable-line
}

clamp.install = install;
export default clamp;
