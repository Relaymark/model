'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CompanyModel;
CompanyModel.$inject = ['$modelFactory', 'EmployeeModel'];
function CompanyModel($modelFactory, EmployeeModel) {
  return $modelFactory('directory/companies', {
    map: {
      employees: function employees(_employees, company) {
        var Factory = EmployeeModel.forCompany(company.shortId);
        return _employees ? _employees.map(function (x) {
          var model = new Factory(x);
          return model;
        }) : [];
      }
    }
  });
}