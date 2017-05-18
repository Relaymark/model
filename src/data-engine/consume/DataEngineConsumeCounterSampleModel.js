DataEngineConsumeCounterSampleModel.$inject = ['$modelFactory'];
export default function DataEngineConsumeCounterSampleModel($modelFactory) {
  var result = {
    forDataSourceSidAndCounter: function forDataSourceSid(dataSourceSid, counterName) {
      return $modelFactory('data-engine/consume/counters/' + dataSourceSid + '/' + counterName);
    }
  }; 
  return result;
} 
