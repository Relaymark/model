'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AssignmentModel;
AssignmentModel.$inject = ['$modelFactory'];
function AssignmentModel($modelFactory) {
  var result = {
    forCompanyAndAffiliation: function forCompanyAndAffiliation(companyId, affiliationId) {
      return $modelFactory('directory/companies/' + companyId + '/affiliations/' + affiliationId + '/assignments', {
        map: {
          shortId: 'user.shortId'
        }
      });
    },
    forNetworkAndOu: function forNetworkAndOu(networkId, organizationUnitId) {
      return $modelFactory('directory/networks/' + networkId + '/organization-units/' + organizationUnitId + '/assignments', {
        map: {
          shortId: 'user.shortId'
        }
      });
    }
  };
  return result;
}