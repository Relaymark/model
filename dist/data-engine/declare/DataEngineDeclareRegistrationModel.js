'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DataEngineDeclareRegistrationModel;
DataEngineDeclareRegistrationModel.$inject = ['$modelFactory'];
function DataEngineDeclareRegistrationModel($modelFactory) {
  return $modelFactory('data-engine/declare/registrations');
}