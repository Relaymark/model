'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DataEnginePopulateCounterSampleModel;
DataEnginePopulateCounterSampleModel.$inject = ['$modelFactory'];
function DataEnginePopulateCounterSampleModel($modelFactory) {
  var result = {
    forDataSourceAndCounter: function forDataSource(dataSourceSid, counterName) {
      return $modelFactory('data-engine/populate/counters/' + dataSourceSid + '/' + counterName);
    }
  };
  return result;
}