CommunityPageModel.$inject = ['$modelFactory'];
export default function CommunityPageModel($modelFactory) {
  var result = {
    forNetwork: function (networkId) {
      return $modelFactory('applications/networks/' + networkId + '/community/pages');
    }
  };
  return result;
}
