CompanyModel.$inject = ['$modelFactory', 'EmployeeModel'];
export default function CompanyModel($modelFactory, EmployeeModel) {
  return $modelFactory('directory/companies', {
    map: {
      employees: function (employees, company) {
        var Factory = EmployeeModel.forCompany(company.shortId);
        return employees ? employees.map(function (x) {
          var model = new Factory(x);
          return model;
        }) : [];
      }
    }
  });
}

