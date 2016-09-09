RelayboxCounterLiveDataModel.$inject = ['$modelFactory'];
export default function RelayboxCounterLiveDataModel($modelFactory) {
  var result = {
    forDataSourceSidAndCounter: function forDataSourceSid(dataSourceSid, counterName) {
      return $modelFactory('applications/relaybox/counter-data/' + dataSourceSid + '/' + counterName + '/live');
    }
  };
  return result;
} 
