/*eslint-disable no-unused-vars */
CommunityAppModel.$inject = ['$modelFactory', 'CommunityConfigurationModel'];
export default function CommunityAppModel($modelFactory, CommunityConfigurationModel) {
  var result = {
    forNetwork: function (networkId) {
      return $modelFactory('applications/networks/' + networkId + '/community', {
        addPkToRoutes: false, //here we're accessing community by the network way, not by the community Id.So don't inject it into routes as for normal cases.
        map: {
          configuration: function (configuration, communityApp) {
            var Factory = CommunityConfigurationModel.forNetwork(networkId);
            return new Factory(configuration);
          }
        }
      });
    }
  };
  return result;
}
/*eslint-enable no-unused-vars */
