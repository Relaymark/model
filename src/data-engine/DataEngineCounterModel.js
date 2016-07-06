DataEngineCounterModel.$inject = ['$modelFactory'];
export default function DataEngineCounterModel($modelFactory) {
  var result = {
    forDataSourceAndCounter: function forDataSource(dataSourceId, counterName) {
      return $modelFactory('data-engine/counters/' + dataSourceId + '/' + counterName);
    }
  };
  return result;
} 