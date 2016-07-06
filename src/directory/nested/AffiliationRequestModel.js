AffiliationRequestModel.$inject = ['$modelFactory'];
export default function AffiliationRequestModel($modelFactory) {
  var result = {
    forNetwork: function (networkId) {
      return $modelFactory('directory/networks/' + networkId + '/affiliation-requests');
    }
  };
  return result;
}
