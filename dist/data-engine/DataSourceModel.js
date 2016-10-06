'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DataSourceModel;
DataSourceModel.$inject = ['$modelFactory'];
function DataSourceModel($modelFactory) {
  return $modelFactory('data-engine/data-sources');
}