NetworkModel.$inject = ['$modelFactory', 'OrganizationUnitModel'];
export default function NetworkModel($modelFactory, OrganizationUnitModel) {
  return $modelFactory('directory/networks', {
    map: {
      organizationUnit: function (organizationUnit, network) {
        var Factory = OrganizationUnitModel.forNetwork(network.shortId);
        return new Factory(organizationUnit);
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
