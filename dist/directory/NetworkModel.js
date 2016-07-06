'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NetworkModel;
NetworkModel.$inject = ['$modelFactory', 'OrganizationUnitModel'];
function NetworkModel($modelFactory, OrganizationUnitModel) {
  return $modelFactory('directory/networks', {
    map: {
      organizationUnit: function organizationUnit(_organizationUnit, network) {
        var Factory = OrganizationUnitModel.forNetwork(network.shortId);
        return new Factory(_organizationUnit);
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