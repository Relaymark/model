'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DataEngineCounterModel;
DataEngineCounterModel.$inject = ['$modelFactory'];
function DataEngineCounterModel($modelFactory) {
  var result = {
    forDataSourceAndCounter: function forDataSource(dataSourceId, counterName) {
      return $modelFactory('data-engine/counters/' + dataSourceId + '/' + counterName);
    }
  };
  return result;
}