AdminModel.$inject = ['$modelFactory'];
export default function AdminModel($modelFactory) {
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
