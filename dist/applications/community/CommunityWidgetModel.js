'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CommunityWidgetModel;
CommunityWidgetModel.$inject = ['$modelFactory'];
function CommunityWidgetModel($modelFactory) {
  var result = {
    forNetwork: function forNetwork(networkId) {
      return $modelFactory('applications/networks/' + networkId + '/community/configuration/widgets', {
        actions: {
          testConnection: {
            method: 'GET',
            url: '{shortId}/test',
            wrap: false
          }
        }
      });
    }
  };
  return result;
}