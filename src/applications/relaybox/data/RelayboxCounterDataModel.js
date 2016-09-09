RelayboxCounterDataModel.$inject = ['$modelFactory'];
export default function RelayboxCounterDataModel($modelFactory) {
  var result = {
    forDataSourceSidAndCounter: function forDataSourceSid(dataSourceSid, counterName) {
      return $modelFactory('applications/relaybox/counter-data/' + dataSourceSid + '/' + counterName);
    },
    liveForDataSourceSidAndCounter: function (dataSourceSid, counterName) {
      return $modelFactory('applications/relaybox/counter-data/' + dataSourceSid + '/' + counterName + '/live');
    }
  };
  return result;
} 
