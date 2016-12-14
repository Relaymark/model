DataEnginePopulateCounterSampleModel.$inject = ['$modelFactory'];
export default function DataEnginePopulateCounterSampleModel($modelFactory) {
  var result = {
    forDataSourceAndCounter: function forDataSource(dataSourceSid, counterName) {
      return $modelFactory('data-engine/populate/counters/' + dataSourceSid + '/' + counterName);
    }
  };
  return result;
}
