CommunityPageWidgetModel.$inject = ['$modelFactory'];
export default function CommunityPageWidgetModel($modelFactory) {
  var result = {
    forNetworkAndPage: function (networkId, pageId) {
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
