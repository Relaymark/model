'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EventModel;
EventModel.$inject = ['$modelFactory'];
function EventModel($modelFactory) {
  return $modelFactory('events');
}