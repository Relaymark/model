'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RelayboxCounterDataModel;
RelayboxCounterDataModel.$inject = ['$modelFactory'];
function RelayboxCounterDataModel($modelFactory) {
  var result = {
    forDataSourceSidAndCounter: function forDataSourceSid(dataSourceSid, counterName) {
      return $modelFactory('applications/relaybox/counter-data/' + dataSourceSid + '/' + counterName);
    }
  };
  return result;
}