NetworkModel.$inject = ['$modelFactory', 'OrganizationUnitModel', 'LocationAssignmentModel'];
export default function NetworkModel($modelFactory, OrganizationUnitModel, LocationAssignmentModel) {
  return $modelFactory('directory/networks', {
    map: {
      organizationUnit: function (organizationUnit, network) {
        var Factory = OrganizationUnitModel.forNetwork(network.shortId);
        return new Factory(organizationUnit);
      },
      locationAssignment: function (locationAssignment, network) {
        var Factory = LocationAssignmentModel.forNetwork(network.shortId);
        return new Factory();
      }
    },
    actions: {
      getMemberStatistics: {
        method: 'GET',
        url: '{shortId}/member-stats',
        wrap: false
      },
      getStatistics: {
        method: 'GET',
        url: '{shortId}/statistics',
        wrap: false
      },
      getGraph: {
        method: 'GET',
        url: '{shortId}/graph',
        wrap: false
      }
    }
  });
}
