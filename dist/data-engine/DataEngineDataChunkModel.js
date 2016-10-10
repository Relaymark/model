'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DataEngineDataChunkModel;
DataEngineDataChunkModel.$inject = ['$modelFactory'];
function DataEngineDataChunkModel($modelFactory) {
  return $modelFactory('data-engine/data-chunks');
}