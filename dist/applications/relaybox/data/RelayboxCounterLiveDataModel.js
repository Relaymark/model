'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RelayboxCounterLiveDataModel;
RelayboxCounterLiveDataModel.$inject = ['$modelFactory'];
function RelayboxCounterLiveDataModel($modelFactory) {
  var result = {
    forDataSourceSidAndCounter: function forDataSourceSid(dataSourceSid, counterName) {
      return $modelFactory('applications/relaybox/counter-data/' + dataSourceSid + '/' + counterName + '/live');
    }
  };
  return result;
}