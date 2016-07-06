'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AffiliationRequestModel;
AffiliationRequestModel.$inject = ['$modelFactory'];
function AffiliationRequestModel($modelFactory) {
  var result = {
    forNetwork: function forNetwork(networkId) {
      return $modelFactory('directory/networks/' + networkId + '/affiliation-requests');
    }
  };
  return result;
}