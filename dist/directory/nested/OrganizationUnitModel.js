'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OrganizationUnitModel;
/*eslint-disable no-unused-vars */
OrganizationUnitModel.$inject = ['$modelFactory', 'AssignmentModel', 'AffiliationModel', 'AffiliationRequestModel'];
function OrganizationUnitModel($modelFactory, AssignmentModel, AffiliationModel, AffiliationRequestModel) {
  var self = this;
  self.forNetwork = function (networkId) {
    return $modelFactory('directory/networks/' + networkId + '/organization-units', {
      map: {
        children: function children(_children, ou) {
          var Factory = self.forNetwork(networkId);
          return _children ? _children.map(function (x) {
            var model = new Factory(x);
            return model;
          }) : [];
        },
        networkAssignments: function networkAssignments(assignments, ou) {
          var Factory = AssignmentModel.forNetworkAndOu(networkId, ou.shortId);
          return assignments ? assignments.map(function (x) {
            var model = new Factory(x);
            return model;
          }) : [];
        },
        affiliations: function affiliations(_affiliations, ou) {
          var Factory = AffiliationModel.forNetwork(networkId);
          return _affiliations ? _affiliations.map(function (x) {
            var model = new Factory(x);
            return model;
          }) : [];
        },
        affiliationRequests: function affiliationRequests(_affiliationRequests, ou) {
          var Factory = AffiliationRequestModel.forNetwork(networkId);
          return _affiliationRequests ? _affiliationRequests.map(function (x) {
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