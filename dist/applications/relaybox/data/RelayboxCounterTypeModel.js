'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RelayboxCounterTypeModel;
RelayboxCounterTypeModel.$inject = ['$modelFactory'];
function RelayboxCounterTypeModel($modelFactory) {
  return $modelFactory('applications/relaybox/counter-types');
}