
import router from './router'

// no redirect whitelist
const whiteList = ['/login', '/auth-redirect'];

// permission judge function
function hasPermission (roles, permissionRoles) {
  // admin permission passed directly
  if (roles.indexOf('admin') >= 0) return true;
  if (!permissionRoles) return true;
  return roles.some(role => permissionRoles.indexOf(role) >= 0);
}

router.beforeEach((to, from, next) => {
  next();
});
