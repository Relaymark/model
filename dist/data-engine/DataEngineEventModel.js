'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DataEngineEventModel;
DataEngineEventModel.$inject = ['$modelFactory'];
function DataEngineEventModel($modelFactory) {
  var result = {
    forDataSourceAndEventTypeName: function forDataSource(dataSourceId, eventTypeName) {
      return $modelFactory('data-engine/events/?dataSourceId' + dataSourceId + '&eventTypeName=' + eventTypeName);
    }
  };
  return result;
}