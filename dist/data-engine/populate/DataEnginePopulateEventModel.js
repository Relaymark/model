'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DataEnginePopulateEventModel;
DataEnginePopulateEventModel.$inject = ['$modelFactory'];
function DataEnginePopulateEventModel($modelFactory) {
  return $modelFactory('data-engine/populate/events');
}