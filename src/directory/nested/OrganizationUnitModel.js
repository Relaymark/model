/*eslint-disable no-unused-vars */
OrganizationUnitModel.$inject = ['$modelFactory', 'AssignmentModel', 'AffiliationModel', 'AffiliationRequestModel'];
export default function OrganizationUnitModel($modelFactory, AssignmentModel, AffiliationModel, AffiliationRequestModel) {
  var self = this;
  self.forNetwork = function (networkId) {
    return $modelFactory('directory/networks/' + networkId + '/organization-units', {
      map: {
        children: function (children, ou) {
          var Factory = self.forNetwork(networkId);
          return children ? children.map(function (x) {
            var model = new Factory(x);
            return model;
          }) : [];
        },
        networkAssignments: function (assignments, ou) {
          var Factory = AssignmentModel.forNetworkAndOu(networkId, ou.shortId);
          return assignments ? assignments.map(function (x) {
            var model = new Factory(x);
            return model;
          }) : [];
        },
        affiliations: function (affiliations, ou) {
          var Factory = AffiliationModel.forNetwork(networkId);
          return affiliations ? affiliations.map(function (x) {
            var model = new Factory(x);
            return model;
          }) : [];
        },
        affiliationRequests: function (affiliationRequests, ou) {
          var Factory = AffiliationRequestModel.forNetwork(networkId);
          return affiliationRequests ? affiliationRequests.map(function (x) {
            var model = new Factory(x);
            return model;
          }) : [];
        }
      }
    });
  };

  return self;
}
/*eslint-enable no-unused-vars */
