AffiliationModel.$inject = ['$modelFactory', 'AssignmentModel'];
export default function AffiliationModel($modelFactory, AssignmentModel) {
  var result = {
    forCompany: function (companyId) {
      return $modelFactory('directory/companies/' + companyId + '/affiliations', {
        map: {
          assignments: function (assignments, affiliation) {
            var Factory = AssignmentModel.forCompanyAndAffiliation(companyId, affiliation.shortId);
            return assignments ? assignments.map(function (x) {
              var model = new Factory(x);
              return model;
            }) : [];
          }
        }
      });
    },
    forNetwork: function (networkId) {
      return $modelFactory('directory/networks/' + networkId + '/affiliations');
    }
  };
  return result;
}

