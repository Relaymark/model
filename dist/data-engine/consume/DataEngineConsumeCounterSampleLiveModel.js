'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DataEngineConsumeCounterSampleLiveModel;
DataEngineConsumeCounterSampleLiveModel.$inject = ['$modelFactory'];
function DataEngineConsumeCounterSampleLiveModel($modelFactory) {
  var result = {
    forDataSourceSidAndCounter: function forDataSourceSid(dataSourceSid, counterName) {
      return $modelFactory('data-engine/consume/counters/' + dataSourceSid + '/' + counterName + '/live');
    }
  };
  return result;
}