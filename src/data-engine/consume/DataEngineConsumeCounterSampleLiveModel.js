DataEngineConsumeCounterSampleLiveModel.$inject = ['$modelFactory'];
export default function DataEngineConsumeCounterSampleLiveModel($modelFactory) {
  var result = {
    forDataSourceSidAndCounter: function forDataSourceSid(dataSourceSid, counterName) {
      return $modelFactory('data-engine/consume/counters/' + dataSourceSid + '/' + counterName + '/live');
    }
  };
  return result;
} 
