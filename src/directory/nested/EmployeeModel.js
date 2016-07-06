EmployeeModel.$inject = ['$modelFactory'];
export default function EmployeeModel($modelFactory) {
  var result = {
    forCompany: function (companyId) {
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
