'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DataEnginePopulateDataChunkModel;
DataEnginePopulateDataChunkModel.$inject = ['$modelFactory'];
function DataEnginePopulateDataChunkModel($modelFactory) {
  return $modelFactory('data-engine/populate/data-chunks');
}