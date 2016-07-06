'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DataSourceRegistrationModel;
DataSourceRegistrationModel.$inject = ['$modelFactory'];
function DataSourceRegistrationModel($modelFactory) {
  return $modelFactory('data-engine/registrations');
}