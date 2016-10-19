'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AffiliationModel;
AffiliationModel.$inject = ['$modelFactory', 'AssignmentModel'];
function AffiliationModel($modelFactory, AssignmentModel) {
  var result = {
    forCompany: function forCompany(companyId) {
      return $modelFactory('directory/companies/' + companyId + '/affiliations', {
        map: {
          assignments: function assignments(_assignments, affiliation) {
            var Factory = AssignmentModel.forCompanyAndAffiliation(companyId, affiliation.shortId);
            return _assignments ? _assignments.map(function (x) {
              var model = new Factory(x);
              return model;
            }) : [];
          }
        }
      });
    },
    forNetwork: function forNetwork(networkId) {
      return $modelFactory('directory/networks/' + networkId + '/affiliations');
    }
  };
  return result;
}