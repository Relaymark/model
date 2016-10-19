'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CommunityCategoryModel;
CommunityCategoryModel.$inject = ['$modelFactory'];
function CommunityCategoryModel($modelFactory) {
  var result = {
    forNetwork: function forNetwork(networkId) {
      return $modelFactory('applications/networks/' + networkId + '/community/configuration/categories');
    }
  };
  return result;
}