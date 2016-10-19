'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NetworkModel;
NetworkModel.$inject = ['$modelFactory', 'OrganizationUnitModel', 'LocationAssignmentModel'];
function NetworkModel($modelFactory, OrganizationUnitModel, LocationAssignmentModel) {
  return $modelFactory('directory/networks', {
    map: {
      organizationUnit: function organizationUnit(_organizationUnit, network) {
        var Factory = OrganizationUnitModel.forNetwork(network.shortId);
        return new Factory(_organizationUnit);
      },
      locationAssignment: function locationAssignment(_locationAssignment, network) {
        var Factory = LocationAssignmentModel.forNetwork(network.shortId);
        return new Factory();
      }
    },
    actions: {
      getMemberStatistics: {
        method: 'GET',
        url: '{shortId}/member-stats',
        wrap: false
      }
    }
  });
}