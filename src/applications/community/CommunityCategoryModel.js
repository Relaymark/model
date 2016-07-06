CommunityCategoryModel.$inject = ['$modelFactory'];
export default function CommunityCategoryModel($modelFactory) {
  var result = {
    forNetwork: function (networkId) {
      return $modelFactory('applications/networks/' + networkId + '/community/configuration/categories');
    }
  };
  return result;
}
