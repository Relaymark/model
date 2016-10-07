'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DataEngineDataChunkModel;
DataEngineDataChunkModel.$inject = ['$modelFactory'];
function DataEngineDataChunkModel($modelFactory) {
  var result = {
    forDataSourceSIdAndDataChunkTypeName: function forDataSource(dataSourceSId, dataChunkTypeName) {
      return $modelFactory('data-engine/data-chunks/' + dataSourceSId + '/' + dataChunkTypeName);
    }
  };
  return result;
}