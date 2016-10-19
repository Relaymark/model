'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CommunityAppModel;
/*eslint-disable no-unused-vars */
CommunityAppModel.$inject = ['$modelFactory', 'CommunityConfigurationModel'];
function CommunityAppModel($modelFactory, CommunityConfigurationModel) {
  var result = {
    forNetwork: function forNetwork(networkId) {
      return $modelFactory('applications/networks/' + networkId + '/community', {
        addPkToRoutes: false, //here we're accessing community by the network way, not by the community Id.So don't inject it into routes as for normal cases.
        map: {
          configuration: function configuration(_configuration, communityApp) {
            var Factory = CommunityConfigurationModel.forNetwork(networkId);
            return new Factory(_configuration);
          }
        }
      });
    }
  };
  return result;
}
/*eslint-enable no-unused-vars */