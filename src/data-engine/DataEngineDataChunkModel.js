DataEngineDataChunkModel.$inject = ['$modelFactory'];
export default function DataEngineDataChunkModel($modelFactory) {
  var result = {
    forDataSourceSIdAndDataChunkTypeName: function forDataSource(dataSourceSId, dataChunkTypeName) {
      return $modelFactory('data-engine/data-chunks/' + dataSourceSId + '/' + dataChunkTypeName);
    }
  };
  return result;
} 