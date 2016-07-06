'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CommunityPageModel;
CommunityPageModel.$inject = ['$modelFactory'];
function CommunityPageModel($modelFactory) {
  var result = {
    forNetwork: function forNetwork(networkId) {
      return $modelFactory('applications/networks/' + networkId + '/community/pages');
    }
  };
  return result;
}