'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EmployeeModel;
EmployeeModel.$inject = ['$modelFactory'];
function EmployeeModel($modelFactory) {
  var result = {
    forCompany: function forCompany(companyId) {
      return $modelFactory('directory/companies/' + companyId + '/employees', {
        map: {
          shortId: 'user.shortId'
        },
        actions: {
          getStatistics: {
            method: 'GET',
            url: 'statistics',
            wrap: false
          }
        }
      });
    }
  };
  return result;
}