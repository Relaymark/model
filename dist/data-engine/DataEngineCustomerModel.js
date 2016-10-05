'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DataEngineCustomerModel;
DataEngineCustomerModel.$inject = ['$modelFactory'];
function DataEngineCustomerModel($modelFactory) {
  return $modelFactory('data-engine/customers');
}