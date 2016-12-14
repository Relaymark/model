'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DataEngineConsumeEventModel;
DataEngineConsumeEventModel.$inject = ['$modelFactory'];
function DataEngineConsumeEventModel($modelFactory) {
  return $modelFactory('data-engine/consume/events');
}