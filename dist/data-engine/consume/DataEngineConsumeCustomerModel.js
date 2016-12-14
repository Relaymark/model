'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DataEngineConsumeCustomerModel;
DataEngineConsumeCustomerModel.$inject = ['$modelFactory'];
function DataEngineConsumeCustomerModel($modelFactory) {
  return $modelFactory('data-engine/consume/customers');
}