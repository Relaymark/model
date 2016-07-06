CommunityWidgetModel.$inject = ['$modelFactory'];
export default function CommunityWidgetModel($modelFactory) {
  var result = {
    forNetwork: function (networkId) {
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
