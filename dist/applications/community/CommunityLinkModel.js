'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CommunityLinkModel;
CommunityLinkModel.$inject = ['$modelFactory'];
function CommunityLinkModel($modelFactory) {
  var result = {
    forNetwork: function forNetwork(networkId) {
      return $modelFactory('applications/networks/' + networkId + '/community/links');
    }
  };
  return result;
}