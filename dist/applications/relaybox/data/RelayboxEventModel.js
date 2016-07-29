'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RelayboxEventModel;
RelayboxEventModel.$inject = ['$modelFactory'];
function RelayboxEventModel($modelFactory) {
  var result = {
    forDataSourceAndEventTypeName: function forDataSource(dataSourceId, eventTypeName) {
      return $modelFactory('applications/relaybox/event-data/?dataSourceId' + dataSourceId + '&eventTypeName=' + eventTypeName);
    }
  };
  return result;
}