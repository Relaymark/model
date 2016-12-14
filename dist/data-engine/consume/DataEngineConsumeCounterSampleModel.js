'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DataEngineConsumeCounterSampleModel;
DataEngineConsumeCounterSampleModel.$inject = ['$modelFactory'];
function DataEngineConsumeCounterSampleModel($modelFactory) {
  var result = {
    forDataSourceSidAndCounter: function forDataSourceSid(dataSourceSid, counterName) {
      return $modelFactory('data-engine/consume/counters/' + dataSourceSid + '/' + counterName);
    }
  };
  return result;
}