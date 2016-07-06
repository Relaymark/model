'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AdminModel;
AdminModel.$inject = ['$modelFactory'];
function AdminModel($modelFactory) {
  return $modelFactory('admin', {
    actions: {
      resetPwd: {
        method: 'POST',
        url: 'reset-pwd',
        wrap: false
      },
      lostPwd: {
        method: 'POST',
        url: 'lost-pwd',
        wrap: false
      }
    }
  });
}