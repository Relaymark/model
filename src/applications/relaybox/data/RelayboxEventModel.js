RelayboxEventModel.$inject = ['$modelFactory'];
export default function RelayboxEventModel($modelFactory) {
  var result = {
    forDataSourceAndEventTypeName: function forDataSource(dataSourceId, eventTypeName) {
      return $modelFactory('applications/relaybox/event-data/?dataSourceId' + dataSourceId + '&eventTypeName=' + eventTypeName);
    }
  };
  return result;
}
