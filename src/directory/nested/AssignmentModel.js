AssignmentModel.$inject = ['$modelFactory'];
export default function AssignmentModel($modelFactory) {
  var result = {
    forCompanyAndAffiliation: function (companyId, affiliationId) {
      return $modelFactory('directory/companies/' + companyId + '/affiliations/' + affiliationId + '/assignments', {
        map: {
          shortId: 'user.shortId'
        }
      });
    },
    forNetworkAndOu: function (networkId, organizationUnitId) {
      return $modelFactory('directory/networks/' + networkId + '/organization-units/' + organizationUnitId + '/assignments', {
        map: {
          shortId: 'user.shortId'
        }
      });
    }
  };
  return result;
}
