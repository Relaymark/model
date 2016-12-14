'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DataEngineDeclareDataSourceModel;
DataEngineDeclareDataSourceModel.$inject = ['$modelFactory'];
function DataEngineDeclareDataSourceModel($modelFactory) {
  return $modelFactory('data-engine/declare/data-sources');
}