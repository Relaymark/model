'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CommunityPageWidgetModel;
CommunityPageWidgetModel.$inject = ['$modelFactory'];
function CommunityPageWidgetModel($modelFactory) {
  var result = {
    forNetworkAndPage: function forNetworkAndPage(networkId, pageId) {
      return $modelFactory('applications/networks/' + networkId + '/community/pages/' + pageId + '/widgets', {
        actions: {
          getData: {
            method: 'GET',
            url: '{shortId}/data',
            isArray: true, //not a paged result for now ...
            wrap: false
          }
        }
      });
    }
  };
  return result;
}