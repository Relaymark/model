DataEngineEventModel.$inject = ['$modelFactory'];
export default function DataEngineEventModel($modelFactory) {
  /*var result = {
    forDataSourceAndEventTypeName: function forDataSource(dataSourceId, eventTypeName) {
      return $modelFactory('data-engine/events/?dataSourceId' + dataSourceId + '&eventTypeName=' + eventTypeName);
    }
  };
  return result;*/
  return $modelFactory('data-engine/events');
}
