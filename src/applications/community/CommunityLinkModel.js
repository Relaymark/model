CommunityLinkModel.$inject = ['$modelFactory'];
export default function CommunityLinkModel($modelFactory) {
  var result = {
    forNetwork: function (networkId) {
      return $modelFactory('applications/networks/' + networkId + '/community/links');
    }
  };
  return result;
}


